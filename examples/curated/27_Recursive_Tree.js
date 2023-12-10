/**
 * @name Recursive Tree
 * @description This is an example of rendering a simple tree-like structure via recursion.
 * The branching angle is calculated as a function of the horizontal mouse
 * location. Move the mouse left and right to change the angle.
 * Based on Daniel Shiffman's <a href="https://processing.org/examples/tree.html">Recursive Tree Example</a> for Processing.
 */

let theta;

function setup() {
  createCanvas(710, 400);
  colorMode(HSB);
}

function draw() {
  background(0);

  // Calculate the angle based on the mouse position, maximum 90 degrees
  let angle = (mouseX / width) * 90;
  angle = min(angle, 90);
  // Convert the angle to radians
  theta = radians(angle);
  // Start the tree from the bottom of the screen
  translate(width/2, height);
  // Draw a line 120 pixels
  stroke(0, 255, 255);
  line(0, 0, 0, -120);
  // Move to the end of that line
  translate(0, -120);
  // Start the recursive branching
  branch(120, 0);

  describe('A tree drawn by recursively drawing branches, with angle determined by the user mouse position.');
}

function branch(h, level) {

  // Set the hue based on the recursion level
  stroke(level*25, 255, 255);

  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // Draw if our branch length > 2, otherwise stop the recursion
  if (h > 2) {
    // Draw the right branch
    // Save the current coordinate system
    push();    
    // Rotate by theta
    rotate(theta);
    // Draw the branch
    line(0, 0, 0, -h);  
    // Move to the end of the branch
    translate(0, -h); 
    // Call branch() recursively
    branch(h, level+1);       
    // Restore the saved coordinate system
    pop();

    // Draw the left branch
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level+1);
    pop();
  }
}

