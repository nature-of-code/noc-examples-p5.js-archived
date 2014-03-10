function Cell(x_, y_, w_) {

  	this.x = x_;
	this.y = y_;
	this.w = w_;
  	this.xoff = this.w/2;
  	this.yoff = sin(radians(60))*this.w;
  	this.state = Math.floor(random(2));
}

Cell.prototype.display = function() {
	fill(this.state*255);    	
	stroke(0);
    	pushMatrix();
    	translate(this.x,this.y);
    	beginShape();
    	vertex(0, this.yoff);
    	vertex(this.xoff, 0);
    	vertex(this.xoff+this.w, 0);
    	vertex(2*this.w, this.yoff);
    	vertex(this.xoff+this.w, 2*this.yoff);
    	vertex(this.xoff, 2*this.yoff);
    	vertex(0, this.yoff);
    	endShape(CLOSE);
    	popMatrix();
}
