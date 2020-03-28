function setup() {
    // The vector v equals (1,5).
    let v = createVector(1, 5);

    // The vector u equals v multiplied by 2.
    let u = p5.Vector.mult(v,2);

    // The vector w equals v minus u.
    let w = p5.Vector.sub(v,u);

    // Divide the vector w by 3.
    w.div(3);
}