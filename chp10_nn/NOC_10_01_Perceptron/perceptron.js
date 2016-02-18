// The Nature of Code
// http://natureofcode.com

// Neural Network: Perceptron

// A Simple Perceptron Class
// Includes functionality for user to train network with known data,
// and generate an output based on an array of inputs


function Perceptron(num_of_inputs) {
	this.weights = [];
	this.c = 0.01; // learning constant
	

	// Weights start off random 
	for (var i = 0; i < num_of_inputs; i++) {
		this.weights[i] = Math.random(-1,1);
	}


	// Return an output based on inputs
	this.feedforward = function(inputs) {
		var sum = 0;
		for (var i = 0; i < this.weights.length; i++) {
			sum += inputs[i] * this.weights[i];
			console.log(i+": "+inputs[i]+", "+this.weights[i]);
		}
		console.log("sum: "+sum);
		return this.activate(sum);
	}


	// Output is +1 or -1
	this.activate = function(sum) {
		if (sum > 0) return 1;
		else return -1;
	}


	// Train network against known data
	this.train = function(inputs, desired) {
		var guess = this.feedforward(inputs);
		var error = desired - guess;

		for (var i = 0; i < this.weights.length; i++) {
			this.weights[i] += this.c * error * inputs[i];
		}

	}

} 




