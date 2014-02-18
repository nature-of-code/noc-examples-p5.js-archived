var startAngle = 0;
var angleVel = 0.05;
var amplitude = 100;

function setup() {
  size(250, 200);
  smooth();
}

function draw() {
  background(255);
  
  startAngle += 0.015;
  var angle = startAngle;
  
  for (var x = 0; x <= width; x += 24) {
    // Calculate the y location according to amplitude and sine of the angle.
    var y = amplitude * sin(angle);
    // Draw a circle at the x, y location
    ellipse(x, y+height/2, 48, 48);
    // Increment the angle according to angular velocity
    angle += angleVel;
  }
}

