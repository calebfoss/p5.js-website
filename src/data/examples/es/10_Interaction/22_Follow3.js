/*
 * @name Seguir 3
 * @frame 710,400
 * @description Una línea segmentada sigue al ratón. El ángulo relativo de
 * cada segmento al siguiente es calculado con la función atan2() y la posición
 * del siguiente es calculado con sin() y cos(). Basado en código de Keith Peters.
 */
let x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(710, 400);
  strokeWeight(9);
  stroke(255, 100);
}

function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
