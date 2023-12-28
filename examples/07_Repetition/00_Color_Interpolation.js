/**
 * @name Color Interpolation
 * @description
 * <a href="https://developer.mozilla.org/en-US/docs/Glossary/Interpolation" target="_blank">Interpolation</a>
 * calculates a value between two other values. For example, the number 5 is
 * halfway between 0 and 10. Different types of interpolation use
 * different rates of change between values. Linear interpolation,
 * abbreviated as lerp, uses a constant rate of change. The
 * <a href="https://p5js.org/reference/#/p5/lerp" target="_blank">lerp()</a>
 * function linearly interpolates between two numbers. The
 * <a href="https://p5js.org/reference/#/p5/lerpColor" target="_blank">lerpColor()</a>
 * function, demonstrated here, linearly interpolates between two colors.
 * In this example, the stripeCount variable adjusts how many horizontal
 * stripes appear. Setting the value to a higher number will look less
 * like individual stripes and more like a gradient.
 */

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
  describe(
    'Horizontal stripes fading between light green at the top and dark blue at the bottom. The top stripe is labeled Color A, and the bottom stripe is labeled Color B.'
  );

  // Top color
  // Hue: 100°, Saturation: 90%, Brightness: 100%
  let colorA = color(100, 90, 100);

  // Bottom color
  // Hue: 250°, Saturation: 80%, Brightness: 20%
  let colorB = color(250, 80, 20);

  // Number of stripes
  let stripeCount = 12;

  // Divide height of canvas by number of stripes
  let stripeHeight = height / stripeCount;

  // Start at top of canvas,
  // repeat until at the bottom
  // move down by stripeHeight each time,
  for (let y = 0; y < height; y += stripeHeight) {
    // Convert y position to number between
    // 0 (top of canvas) and 1 (bottom of canvas)
    let fadeAmount = y / height;

    // Interpolate color
    let betweenColor = lerpColor(colorA, colorB, fadeAmount);

    // Draw stripe
    fill(betweenColor);
    rect(0, y, width, stripeHeight);
  }

  // Draw text labels
  let margin = 5;
  let boxWidth = 60;
  let cornerRadius = 5;
  textAlign(CENTER, CENTER);
  fill(255);
  rect(margin, margin, boxWidth, stripeHeight - margin * 2, cornerRadius);
  fill(0);
  text('Color A', margin, margin, boxWidth, stripeHeight - margin * 2);
  fill(255);
  rect(
    5,
    height - stripeHeight + margin,
    boxWidth,
    stripeHeight - margin * 2,
    cornerRadius
  );
  fill(0);
  text(
    'Color B',
    5,
    height - stripeHeight + margin,
    60,
    stripeHeight - margin * 2
  );
}
