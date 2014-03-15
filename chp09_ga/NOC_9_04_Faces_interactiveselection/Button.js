function Button(x, y, w, h, s) {
	
  	this.r = new Rectangle(x,y,w,h);
  	this.txt = s;
  	this.clickedOn;
  	this.rolloverOn;
}

Button.prototype.display = function() {
    	rectMode(CORNER);
    	stroke(0); noFill();
    	if (this.rolloverOn == true) fill(0.5);
    	if (this.clickedOn == true) fill(0);
    	rect(this.r.x,this.r.y,this.r.width,this.r.height);
    	var b = 0;
    	if (this.clickedOn == true) b = 1;
    	else if (this.rolloverOn == true) b = 0.2;
    	else b = 0;
    	fill(b);
    	textAlign(LEFT);
    	text(this.txt,this.r.x+10,this.r.y+14);

}

Button.prototype.rollover = function(mx, my) {
    	if (this.r.contains(mx,my)) this.rolloverOn = true;
    	else this.rolloverOn = false;
    	return this.rolloverOn;
}

Button.prototype.clicked = function(mx, my) {
    	if (this.r.contains(mx,my)) this.clickedOn = true;
    	return this.clickedOn;
}

Button.prototype.released = function() {
    	this.clickedOn = false;
}
