// Daniel Shiffman
// The Nature of Code
// http://www.shiffman.net/

// A random walker object!

class Walker {
    constructor() {
      this.x = width/2;
      this.y = height/2;
      this.grid = new Array(width);
      for(let i = 0; i < this.grid.length; i++) {
          this.grid[i] = new Array(height).fill(false);
      }
    }
  
    render() {
      stroke(0);
      line(this.x,this.y,this.x,this.y);
    }
  
    // Randomly move up, down, left, right, or stay in one place
    step() {
  
      let ok = false;
  
      let helpme = 0;
  
      while (!ok) {
  
        const choice = int(random(4));
  
        let saveX = this.x;
        let saveY = this.y;
  
        if (choice == 0) {
          this.x++;
        } 
        else if (choice == 1) {
          this.x--;
        } 
        else if (choice == 2) {
          this.y++;
        } 
        else {
          this.y--;
        }
        
        this.x = constrain(this.x, 0, width-1);
        this.y = constrain(this.y, 0, height-1);
  
        if (this.grid[this.x][this.y] == false) {
          ok = true;
          this.grid[this.x][this.y] = true;
        } 
        else {
          this.x = saveX;
          this.y = saveY;
        }
  
  
        helpme++;
  
        if (helpme > 1000) {
          console.log("STUCK");
          noLoop();
          ok = true;
        }
      }
    }
  }
  
  