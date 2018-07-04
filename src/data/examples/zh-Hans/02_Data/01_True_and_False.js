/*
 * @name True 和 False
 * @description 布尔变量只有两个可能的值: true 或者 false。
 * 使用具有控制语句的布尔值来确定程序的流程是很常见的。 
 * 在这个案例中， 当布尔值 “b” 为 true 时，绘制垂直线，当布尔值 “b” 为 false 时，绘制水平线。
 */
function setup() {

  createCanvas(720, 400);
  background(0);
  stroke(255);

  var b = false;
  var d = 20;
  var middle = width/2;

  for (var i = d; i <= width; i += d) {
    
    if (i < middle) {
      b = true;
    } else {
      b = false;
    }
    
    if (b == true) {
      // 垂直线
      line(i, d, i, height-d);
    }
    
    if (b == false) {
      // 水平线
      line(middle, i - middle + d, width-d, i - middle + d);
    }
  }
}
