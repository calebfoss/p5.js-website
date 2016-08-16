/*
 * @name Flocking
 * @description Demostración del <a href="http://www.red3d.com/cwr/">comportamiento "Flocking" según Craig Reynolds</a>.<br>
 * (Reglas: cohesión, separación, alineamiento.)<br>
 * Extraído de <a href="http://natureofcode.com">natureofcode.com</a>.
 */
var boids = [];

function setup() {
  createCanvas(720, 400);

  // Agregar un conjunto inicial de boids al sistema
  for (var i = 0; i < 100; i++) {
    boids[i] = new Boid(random(width), random(height));
  }
}

function draw() {
  background(51);
  // Ejecutar todos los boids
  for (var i = 0; i < boids.length; i++) {
    boids[i].run(boids);
  }
}


// clase Boid
// Métodos para separación, cohesión y alineamiento
function Boid(x, y) {
  this.acceleration = createVector(0, 0);
  this.velocity = p5.Vector.random2D();
  this.position = createVector(x, y);
  this.r = 3.0;
  this.maxspeed = 3;    // velocidad máxima
  this.maxforce = 0.05; // fuerza máxima de viraje
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

// las fuerzas son añadidas a la aceleración
Boid.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}

// acumulamos una nueva aceleración cada vez que el tiempo pasa, basado en tres reglas
Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids); // separación
  var ali = this.align(boids);    // alineamiento
  var coh = this.cohesion(boids); // cohesión
  // darle un peso arbitrario a las fuerzas
  sep.mult(2.5);
  ali.mult(1.0);
  coh.mult(1.0);
  // añade los vectores de fuerza a la aceleración
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

// método para actualizar ubicación
Boid.prototype.update = function() {
  // actualizar velocidad
  this.velocity.add(this.acceleration);
  // limitar velocidad
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // resetear aceleración a 0 en cada ciclo
  this.acceleration.mult(0);
}

// un método que aplica y calcula una fuera de viraje a un objetivo
// viraje = deseado - velocidad
Boid.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target, this.position); // un vector apuntanto desde la ubicación y hacia el objetivo
  // normalizar deseado y escalar a velocidad máxima
  desired.normalize();
  desired.mult(this.maxspeed);
  // viraje = deseado menos velocidad
  var steer = p5.Vector.sub(desired, this.velocity);
  steer.limit(this.maxforce); // limitar a la fuerza máxima de viraje
  return steer;
}

// dibujar el boid como un círculo
Boid.prototype.render = function() {
  fill(127, 127);
  stroke(200);
  ellipse(this.position.x, this.position.y, 16, 16);
}

// wraparound, si se llega a un borde, aparecer por el borde opuesto
Boid.prototype.borders = function() {
  if (this.position.x < -this.r) this.position.x = width + this.r;
  if (this.position.y < -this.r) this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
}

// separación
// método que revisa si hay boids cercanos y vira para alejarse de ellos
Boid.prototype.separate = function(boids) {
  var desiredseparation = 25.0;
  var steer = createVector(0, 0);
  var count = 0;
  // por cada boid en el sistema, revisar si está muy cerca
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);
    // si la distancia es mayor a 0 y menor que un tamaño arbitrario (0 cuando es sí mismo)
    if ((d > 0) && (d < desiredseparation)) {
      // calcular vector apuntando para alejarse del vecino
      var diff = p5.Vector.sub(this.position, boids[i].position);
      diff.normalize();
      diff.div(d); // peso según distancia
      steer.add(diff);
      count++; // contar cuántos
    }
  }
  // promedio -- dividir por la cantidad
  if (count > 0) {
    steer.div(count);
  }

  // mientas el vector sea mayor que 0
  if (steer.mag() > 0) {
    // implementar Reynolds: viraje = deseado - velocidad
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// alineamiento
// por cada boid cercano en el sistema, calcular la velocidad promedio
Boid.prototype.align = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0, 0);
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    var steer = p5.Vector.sub(sum, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

// cohesión
// Para la ubicación promedio (centro) de todos los boids vecinos, calcular el vector de viraje hacia esa ubicación
Boid.prototype.cohesion = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0, 0); // empezar con un vector vacío para acumular todas las ubicaciones
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Agregar ubicación
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum); // Virar hacia la ubicación
  } else {
    return createVector(0, 0);
  }
}
