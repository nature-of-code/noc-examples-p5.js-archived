/*
  Use a custom probability distribution to vary the size of a step taken 
  by the random walker. The step size can be determined by influencing 
  the range of values picked. Can you map the probability to a quadratic 
  function—i.e. making the likelihood that a value is picked equal 
  to the value squared?
*/

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor(){
    this.x = width / 2;
    this.y = height / 2;
    this.prevX = null;
    this.prevY = null;
  }

  render() {
    stroke(0);
    line(this.prevX, this.prevY, this.x, this.y);
  }

  step() {
    this.prevX = this.x;
    this.prevY = this.y;

    let stepSize = this.acceptReject(15);

    this.x = this.x + random( -stepSize, stepSize );
    this.y = this.y + random( -stepSize, stepSize );

    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }

  acceptReject(max) {
    while ( true ) {
      let r1 = random( 0, max );
      let probability = Math.pow( r1, 2);
      let r2 = Math.pow( random( 0, max ), 2);

      if( r2 < probability ) return r1;
    }
  }
  
}
