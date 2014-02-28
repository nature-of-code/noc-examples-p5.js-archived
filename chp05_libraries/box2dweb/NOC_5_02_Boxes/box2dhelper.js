

var pixelsToWorld = function(a,b) {
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

var worldToPixels = function(a,b) {
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
