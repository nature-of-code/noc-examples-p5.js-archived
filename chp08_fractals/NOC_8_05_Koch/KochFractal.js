// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Koch Curve
// A class to manage the list of line segments in the snowflake pattern

function KochFractal() {
  this.start = createVector(0,height-20);   // A p5.Vector for the start
  this.end = createVector(width,height-20); // A p5.Vector for the end
  this.lines = [];                         // An array to keep track of all the lines
  this.count = 0;
  
  this.nextLevel = function() {  
    // For every line that is in the arraylist
    // create 4 more lines in a new arraylist
    this.lines = this.iterate(this.lines);
    this.count++;
  }

  this.restart = function() { 
    this.count = 0;      // Reset count
    this.lines = [];  // Empty the array list
    this.lines.push(new KochLine(this.start,this.end));  // Add the initial line (from one end p5.Vector to the other)
  }
  this.restart();

  this.getCount = function() {
    return this.count;
  }

  // This is easy, just draw all the lines
  this.render = function() {
    for(var i = 0; i < this.lines.length; i++) {
      this.lines[i].display();
    }
  }

  // This is where the **MAGIC** happens
  // Step 1: Create an empty arraylist
  // Step 2: For every line currently in the arraylist
  //   - calculate 4 line segments based on Koch algorithm
  //   - add all 4 line segments into the new arraylist
  // Step 3: Return the new arraylist and it becomes the list of line segments for the structure

  // As we do this over and over again, each line gets broken into 4 lines, which gets broken into 4 lines, and so on. . . 
  this.iterate = function(before) {
    var now = [];    // Create emtpy list
    for(var i = 0; i < before.length; i++) {
      var l = before[i];
      // Calculate 5 koch p5.Vectors (done for us by the line object)
      var a = l.kochA();                 
      var b = l.kochB();
      var c = l.kochC();
      var d = l.kochD();
      var e = l.kochE();
      // Make line segments between all the p5.Vectors and add them
      now.push(new KochLine(a,b));
      now.push(new KochLine(b,c));
      now.push(new KochLine(c,d));
      now.push(new KochLine(d,e));
    }
    return now;
  }
}
