function setup() {
  createCanvas(800, 200);
  newTree();
}

function draw() {
  noLoop();
};

function mousePressed() {
  newTree();
  redraw();
};

function newTree() {
  background(255);
  fill(0);
  text("Click mouse to generate a new tree", 10, height-10);

  stroke(0);
  pushMatrix();
  translate(width/2, height);
  branch(80);
  popMatrix();
};



function branch(h) {
  var sw = map(h, 2, 120, 1, 5);
  strokeWeight(sw);
  line(0, 0, 0, -h);
  translate(0, -h);

  h *= 0.66;

  if (h > 2) {
    var n =  random(1, 4);
    for (var i = 0; i < n; i++) {
      var theta = random(-PI/2, PI/2);
      pushMatrix();
      rotate(theta);
      branch(h);
      popMatrix();
    }
  }
};

