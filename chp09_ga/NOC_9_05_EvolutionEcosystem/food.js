// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Evolution EcoSystem

// A collection of food in the world

function Food(num) {
  // Start with some food
  this.food = [];
  for (var i = 0; i < num; i++) {
     this.food.push(createVector(random(width),random(height))); 
  }
  
  // Add some food at a location
  this.add = function(l) {
     this.food.push(l.copy()); 
  }
  
  // Display the food
  this.run = function() {
    for (var i = 0; i < this.food.length; i++) {
      var f = this.food[i];
      rectMode(CENTER);
      stroke(0);
      fill(127);
      rect(f.x,f.y,8,8);
    } 
    
    // There's a small chance food will appear randomly
    if (random(1) < 0.001) {
       this.food.push(createVector(random(width),random(height))); 
    }
  }
  
  // Return the list of food
  this.getFood = function() {
    return this.food; 
  }
}
