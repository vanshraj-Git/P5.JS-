let bubble1;
let bubble2;
let ismoving = true;

function setup() {
  createCanvas(600, 400); // Set up the canvas size
  bubble1 = new Bubble(200, 200, 40); // Create the first bubble 
  bubble2 = new Bubble(400, 200, 20); // Create the second bubble 
}

function draw() {
  background(0); 
  if (ismoving) {
    bubble1.move(); // Move bubble1 if ismoving is true
    bubble2.move(); // Move bubble2 if ismoving is true
  }
  bubble1.show(); // Draw bubble1
  bubble2.show(); // Draw bubble2
}

// Bubble class to create bubble objects
class Bubble {
  constructor(x, y, r) {
    this.x = x; // Set the x position of the bubble (instance property)
    this.y = y; // Set the y position of the bubble (instance property)
    this.r = r; // Set the radius of the bubble (instance property)
  }
  
  move() {
    // Change the position randomly within a range
    this.x = this.x + random(-5, 5); // Update x position
    this.y = this.y + random(-5, 5); // Update y position
  }

  show() {
    // Draw the bubble on the canvas
    stroke(255); // Set border color to white
    strokeWeight(5); // Set border thickness
    fill(250, 0, 100); // Set fill color to pink
    ellipse(this.x, this.y, this.r * 2); // Draw an ellipse (circle) at (x, y) with radius 2*radius
  }
}
function mousePressed() {
  ismoving = !ismoving; // Switch between moving and stationary bubbles
}
