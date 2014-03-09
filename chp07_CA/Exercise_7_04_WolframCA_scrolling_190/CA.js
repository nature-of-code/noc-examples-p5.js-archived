function CA(r) {

  this.generation;  // How many generations?
  this.ruleset = r;   // An array to store the ruleset, for example {0,1,1,0,1,1,0,1}
  this.w = 5;
  this.cols = width/this.w;
    this.rows = height/this.w;
  this.matrix = new Array(this.cols);
  for (var i = 0; i < this.cols; i++) {
	this.matrix[i] = new Array(this.rows);
  }
	this.restart();
  }


CA.prototype.randomize = function() {
    for (var i = 0; i < 8; i++) {
      this.ruleset[i] = Math.floor(random(2));
    }
  }

  // Reset to generation 0
CA.prototype.restart = function() {
    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        this.matrix[i][j] = 0;
      }
    }
    this.matrix[this.cols/2][0] = 1; 
    this.generation = 0;
  }

CA.prototype.generate = function() {
    for (var i = 0; i < this.cols; i++) {
      var left  = this.matrix[(i+this.cols-1)%this.cols][this.generation%this.rows];
      var me    = this.matrix[i][this.generation%this.rows]; 
      var right = this.matrix[(i+1)%this.cols][this.generation%this.rows];
      this.matrix[i][(this.generation+1)%this.rows] = this.rules(left, me, right);
    }
    this.generation++;
  }

 
CA.prototype.display = function() {
    var offset = this.generation%this.rows;

    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        var y = j - offset;
        if (y <= 0) y = this.rows + y;
        if (this.matrix[i][j] == 1) fill(0);
        else                   fill(255);
        noStroke();
        rect(i*this.w, (y-1)*this.w, this.w, this.w);
      }
    }
  }

  // Implementing the Wolfram rules
  // This is the concise conversion to binary way
  /*int rules (int a, int b, int c) {
   String s = "" + a + b + c;
   int index = Integer.parseInt(s, 2);
   return ruleset[index];
   }*/
  // For JavaScript Mode
CA.prototype.rules = function(a, b, c) {
    if (a == 1 && b == 1 && c == 1) return this.ruleset[7];
    if (a == 1 && b == 1 && c == 0) return this.ruleset[6];
    if (a == 1 && b == 0 && c == 1) return this.ruleset[5];
    if (a == 1 && b == 0 && c == 0) return this.ruleset[4];
    if (a == 0 && b == 1 && c == 1) return this.ruleset[3];
    if (a == 0 && b == 1 && c == 0) return this.ruleset[2];
    if (a == 0 && b == 0 && c == 1) return this.ruleset[1];
    if (a == 0 && b == 0 && c == 0) return this.ruleset[0];
    return 0;
  }

  // The CA is done if it reaches the bottom of the screen
CA.prototype.finished = function() {
    if (this.generation > height/this.w) {
      return true;
    } 
    else {
      return false;
    }
}

