// Making it easier to use all these classes
var Vec2 = Box2D.b2Vec2;
var BodyDef = Box2D.b2BodyDef;
var Body = Box2D.b2Body;
var FixtureDef = Box2D.b2FixtureDef;
var Fixture = Box2D.b2Fixture;
var World = Box2D.b2World;
var PolygonShape = Box2D.b2PolygonShape;
var CircleShape = Box2D.b2CircleShape;
var ChainShape = Box2D.b2ChainShape;
var DebugDraw = Box2D.b2DebugDraw;
var Transform = Box2D.b2Transform;

// variables for transformations
var transX;
var transY;
var scaleFactor;
//var yFlip;

var createWorld = function(gravity,dosleep) {
  if (!gravity) {
  	gravity = new Vec2(0,10);
  }

  if (dosleep == undefined) {
  	dosleep = true;
  }

  transX = width/2;
  transY = height/2;
  scaleFactor = 10;
  //yFlip = -1;
  var w = new World(gravity);
  w.SetWarmStarting(true);
  w.SetContinuousPhysics(true);
  return w;
}

var pixelsToWorld = function(a,b) {
	if (a instanceof Vec2) {
		var newv = new Vec2((a.get_x()-transX)/scaleFactor,(a.get_x()-transY)/scaleFactor);
		return newv;
	} else if (b) {
		var newv = new Vec2((a-transX)/scaleFactor, (b-transY)/scaleFactor);
		return newv;
	} else {
		return a/scaleFactor;
	}

}

var worldToPixels = function(a,b) {
	if (a instanceof Vec2) {
		var newv = new Vec2(a.get_x()*scaleFactor+transX,a.get_y()*scaleFactor+transY);
		return newv;
	} else if (b) {
		var newv = new Vec2(a*scaleFactor+transX,b*scaleFactor+transY);
	} else {
		return a/scaleFactor;
	}
}
