function Food(num) {
  	this.food = new Array();
	for (var i = 0; i < num; i++) {
       		this.food.push(new PVector(random(width),random(height))); 
    	}
 
} 
  
Food.prototype.add = function(l) {
     	this.food.push(l.get()); 
}
  
Food.prototype.run = function() {
    	for (var i = 0; i < this.food.length; i++) {
       		rectMode(CENTER);
       		stroke(0);
       		fill(175);
       		rect(this.food[i].x,this.food[i].y,8,8);
    	} 
    
    	if (random(1) < 0.001) {
       		this.food.push(new PVector(random(width),random(height))); 
    	}
}

Food.prototype.getFood = function() {
    	return this.food; 
}
