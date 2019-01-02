/*
 * @name Variable Scope
 * @description Variables have a global or function "scope". For example,
 * variables declared within either the setup() or draw() functions may be
 * only used in these functions. Global variables, variables declared outside
 * of setup() and draw(), may be used anywhere within the program. If a function
 * variable is declared with the same name as a global variable, the program
 * will use the function variable to make its calculations within the current
 * scope.
 */
let a = 80; // 创建一个全局变量"a"

function setup() {
  createCanvas(720, 400);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {
  // Draw a line using the global variable "a"
  line(a, 0, a, height);

  for (let a = 120; a < 200; a += 3) {
    line(a, 0, a, height);
  }

  let a = 300;
  // 使用新的本地变量 “a” 画一条线
  line(a, 0, a, height);

  // Make a call to the custom function drawAnotherLine()
  drawAnotherLine();

  // Make a call to the custom function drawYetAnotherLine()
  drawYetAnotherLine();
}

function drawAnotherLine() {
  // 在此函数的本地创建一个新变量 “a”
  let a = 320;
  // 使用本地变量 “a” 画一条线
  line(a, 0, a, height);
}

function drawYetAnotherLine() {
  // 因为没有设置新的本地变量 “a”，所以该线使用设置为值 20 的原始全局变量 “a” 进行绘制
  line(a + 3, 0, a + 3, height);
}
