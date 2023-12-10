/**
 * @name Smoke Particles
 * @description Smoke particle system demo, based on 
 * Dan Shiffman's original 
 * <a href="https://natureofcode.com/book/chapter-4-particle-systems/">example</a>
 * for Processing. 
 *
 * The code makes use of the 
 * <a href="https://p5js.org/reference/#/p5.Vector">p5.Vector</a>
 * class, including the 
 * <a href="https://p5js.org/reference/#/p5/createVector">createVector()</a>
 * function.  The various calculations for updating particles'
 * positions and velocities are performed with p5.Vector methods.
 *
 * The particle system is implemented as a 
 * <a href="https://p5js.org/reference/#/p5/class">class</a>, which contains an array of 
 * objects (of class Particle).
 */


// Declare variables for the particle system and texture
let particle_texture;
let particle_system;


function preload() {
  particle_texture = loadImage("assets/particle_texture.png");
}


function setup() {

  // Set the canvas size
  createCanvas(720, 400);
  colorMode(HSB);

  // Initialize the particle system
  particle_system = new ParticleSystem(0, createVector(width / 2, height - 60), particle_texture);

  describe('White circle gives off smoke in the middle of the canvas, with wind force determined by the cursor position.');
}


function draw() {
  background(20);

  // Calculate the wind force based on the mouse x position
  let dx = map(mouseX, 0, width, -0.2, 0.2);
  let wind = createVector(dx, 0);

  // Apply the wind and run the particle system
  particle_system.applyForce(wind);
  particle_system.run();
  for (let i = 0; i < 2; i++) {
    particle_system.addParticle();
  }

  // Draw an arrow representing the wind force
  drawVector(wind, createVector(width / 2, 50, 0), 500);
}


// Display an arrow to show a vector magnitude and direction
function drawVector(v, loc, scale){
  push();
  let arrowsize = 4;
  translate(loc.x, loc.y);
  stroke(255);
  strokeWeight(3);
  rotate(v.heading());

  let len = v.mag() * scale;
  line(0, 0, len,0);
  line(len, 0, len-arrowsize, +arrowsize / 2);
  line(len, 0, len-arrowsize, -arrowsize / 2);
  pop();
}


/**
 * A basic particle system class
 * @param num the number of particles
 * @param v the origin of the particle system
 * @param img_ a texture for each particle in the system
 * @constructor
 */

class ParticleSystem {

    constructor(num, v, img_) {
      this.particles = [];
      // Make a copy of the input vector
      this.origin = v.copy(); 
      this.img = img_
      for(let i = 0; i < num; ++i){
        this.particles.push(new Particle(this.origin, this.img));
      }
    }

    run() {
      // Loop through and run each particle
      for (let i = this.particles.length - 1; i >= 0; i--) {
        let particle = this.particles[i];
        particle.run();

        // Remove dead particles 
        if (particle.isDead()) {
          this.particles.splice(i, 1);
        }
      }
    }

    // Apply force to each particle
    applyForce(dir) {
      for(let i = 0; i < this.particles.length; ++i){
        this.particles[i].applyForce(dir);
      }
    }

    addParticle() {
      this.particles.push(new Particle(this.origin, this.img));
    }
} // class ParticleSystem


class Particle {
    constructor(pos, img_) {
      this.loc = pos.copy();

      let vx = randomGaussian() * 0.3;
      let vy = randomGaussian() * 0.3 - 1.0;

      this.vel = createVector(vx, vy);
      this.acc = createVector();
      this.lifespan = 100.0;
      this.texture = img_;
      this.color = color(frameCount%256, 255, 255);
    }

    // Update and draw the particle
    run() {
      this.update();
      this.render();
    }

    // Draw the particle
    render() {
      imageMode(CENTER);
      tint(this.color, this.lifespan);
      image(this.texture, this.loc.x, this.loc.y);
    }

    applyForce(f) {
      // Add the force vector to the current acceleration vector
      this.acc.add(f);
    }

    isDead() {
      return this.lifespan <= 0.0;
    }

    // Update the particle's position, velocity, lifespan
    update() {
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.lifespan -= 2.5;
      // Set the acceleration to zero
      this.acc.mult(0);
    }

} // class Particle


