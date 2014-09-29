// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// ContactListener to listen for collisions!

function CustomListener() {

}

// Collision event functions!
CustomListener.prototype.BeginContact = function(contact) {
  // Get both fixtures
  var f1 = contact.GetFixtureA();
  var f2 = contact.GetFixtureB();
  // Get both bodies
  var b1 = f1.GetBody();
  var b2 = f2.GetBody();

  // Get our objects that reference these bodies
  var o1 = b1.GetUserData();
  var o2 = b2.GetUserData();

  if (o1 instanceof Particle && o2 instanceof Particle) {
    o1.change();
    o2.change();
  }
}

// Objects stop touching each other
CustomListener.prototype.EndContact = function(contact) {
}

CustomListener.prototype.PreSolve = function(contact,manifold) {
}

CustomListener.prototype.PostSolve = function(contact,manifold) {
}
