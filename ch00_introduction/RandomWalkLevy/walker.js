// Daniel Shiffman
// The Nature of Code
// http://natureofcode.com

// A random walker object!

class Walker {  
    Walker() {
      this.x = width/2;
      this.y = height/2;
      this.prevX = null;
      this.prevY = null;
    }
  
    render() {
      stroke(255);
      line(this.prevX,this.prevY,this.x,this.y);
    }
  
    // Randomly move according to floating point values
    step() {
      this.prevX = x;
      this.prevY = y;
      
      let stepx = random(-1, 1);
      let stepy = random(-1, 1);
      
      const stepsize = montecarlo()*50;
      stepx *= stepsize;
      stepy *= stepsize;
      
      this.x += stepx;
      this.y += stepy;
      this.x = constrain(this.x, 0, width-1);
      this.y = constrain(this.y, 0, height-1);
    }
  }
  
  
  function montecarlo() {
    while (true) {	
  
      let r1 = random(1);	
      let probability = pow(1.0 - r1,8);	
  
      let r2 = random(1);	
      if (r2 < probability) {	
        return r1;
      }
    }
  }
  