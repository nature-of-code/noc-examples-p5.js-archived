function World(num) {
	this.bloops = new Array();
  	this.food = new Food(num);
	for (var i = 0; i < num; i++) {
      		this.l = new PVector(random(width),random(height));
      		this.dna = new DNA();
      		this.bloops.push(new Bloop(this.l,this.dna));
    	}
}

World.prototype.born = function(x, y) {
    	var l = new PVector(x,y);
    	var dna = new DNA();
    	this.bloops.push(new Bloop(l,dna));
}

World.prototype.run = function() {
    	this.food.run();
    	for (var i = this.bloops.length-1; i >= 0; i--) {
      		var b = this.bloops[i];
      		b.run();
      		b.eat(this.food);
      		if (b.dead()) {
        		this.bloops.remove(i);
        		this.food.add(b.location);
      		}
      		var child = b.reproduce();
      		if (child != null) this.bloops.push(child);
    	}
}

