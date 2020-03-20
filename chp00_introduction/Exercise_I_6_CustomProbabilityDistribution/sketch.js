// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke(0);
    point(this.x,this.y);
  }

  step() {
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
