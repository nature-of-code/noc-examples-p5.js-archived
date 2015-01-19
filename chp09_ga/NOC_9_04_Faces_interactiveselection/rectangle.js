// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Re-implementing java.awt.Rectangle
// so JS mode works

function Rectangle(x_, y_, w, h) {
  this.x = x_;
  this.y = y_;
  this.width = w;
  this.height = h;
   
  this.contains = function(px, py) {
    return (px > this.x && px < this.x + this.width  && py > this.y && py < this.y + this.height);
  } 
}
