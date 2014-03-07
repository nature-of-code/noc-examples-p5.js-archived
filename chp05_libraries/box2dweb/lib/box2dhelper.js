// Making it easier to use all these classes
var Vec2 = Box2D.Common.Math.b2Vec2;
var BodyDef = Box2D.Dynamics.b2BodyDef;
var Body = Box2D.Dynamics.b2Body;
var FixtureDef = Box2D.Dynamics.b2FixtureDef;
var Fixture = Box2D.Dynamics.b2Fixture;
var World = Box2D.Dynamics.b2World;
var MassData = Box2D.Collision.Shapes.b2MassData;
var PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var ChainShape = Box2D.Collision.Shapes.b2EdgeChainDef;
var DebugDraw = Box2D.Dynamics.b2DebugDraw;
var Transform = Box2D.Common.Math.b2Transform;

// variables for transformations
var transX;
var transY;
var scaleFactor;
var yFlip;

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
  yFlip = 1;
  return new World(gravity,dosleep);
}

var translateToWorld = function(a,b) {
	if (a instanceof Vec2) {
		var newv = new Vec2();
		newv.x = (a.x-transX)/scaleFactor;
		newv.y = (a.x-transY)/scaleFactor;
		return newv;
	} else if (b) {
		var newv = new Vec2();
		newv.x = (a-transX)/scaleFactor;
		newv.y = (b-transY)/scaleFactor;
		return newv;
	} else {
		return a/scaleFactor;
	}

}

var translateToPixels = function(a,b) {
	if (a instanceof Vec2) {
		var newv = new Vec2();
		newv.x = a.x*scaleFactor+transX;
		newv.y = a.y*scaleFactor+transY;
		return newv;
	} else if (b) {
		var newv = new Vec2();
		newv.x = a*scaleFactor+transX;
		newv.y = b*scaleFactor+transY;
	} else {
		return a/scaleFactor;
	}
}

var scaleToWorld = function(a,b) {
	if (a instanceof Vec2) {
		var newv = new Vec2();
		newv.x = (a.x)/scaleFactor;
		newv.y = yFlip*(a.y)/scaleFactor;
		return newv;
	} else if (b) {
		var newv = new Vec2();
		newv.x = (a)/scaleFactor;
		newv.y = yFlip*(b)/scaleFactor;
		return newv;
	} else {
		return a/scaleFactor;
	}
}

var scaleToPixels = function(a,b) {
	if (a instanceof Vec2) {
		var newv = new Vec2();
		newv.x = a.x*scaleFactor;
		newv.y = yFlip*a.y*scaleFactor;
		return newv;
	} else if (b) {
		var newv = new Vec2();
		newv.x = a*scaleFactor;
		newv.y = yFlip*b*scaleFactor;
	} else {
		return a/scaleFactor;
	}
}


