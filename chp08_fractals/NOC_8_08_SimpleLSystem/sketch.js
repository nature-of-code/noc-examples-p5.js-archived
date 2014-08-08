// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// L-System
// Just demonstrating working with L-System strings
// No drawing

// Start with 'A'
var current = 'A';
// Number of  generations
var count = 0;

var instructions;
var show;

var results = '';

function setup() {
  instructions = createP('<a href=\'#\'>Click the mouse to generate.</a>');
  instructions.position(50,50);
  instructions.class('clickable');
  instructions.mousePressed(generate);
  
  results += 'Generation ' + count + ': ' + current + '<br>';
  show = createP(results);
  show.position(50,100);
}

function generate() {
  // A new StringBuffer for the next generation
  var next = '';
  
  // Look through the current String to replace according to L-System rules
  for (var i = 0; i < current.length; i++) {
    var c = current.charAt(i);
    if (c === 'A') {
      // If we find A replace with AB
      next += 'AB';
    }  else if (c === 'B') {
      // If we find B replace with A
      next += 'A';
    }
  }
  // The current String is now the next one
  current = next;
  count++;
  // Print to message console
  results += 'Generation ' + count + ': ' + current + '<br>';
  show.html(results);
}
