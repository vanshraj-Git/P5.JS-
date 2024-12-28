// A program where a ball moves, bounces off edges, and pauses or resumes on mouse click.

let ball1, ismoving = true;

function setup() {
  createCanvas(400, 400);
  ball1 = new Ball(30, 30, 10, 5, 4); // Initialize the ball with position, radius, and speed
}

function draw() {
  // Clear the background and handle ball movement and display
  background(0);
  if (ismoving) {
    ball1.move();
    ball1.deflect();
  }
  ball1.show();
}

class Ball {
  constructor(x, y, r, speedX, speedY) {
    // Initialize the ball's position, radius, and speed
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    // Update the ball's position based on its speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }

  show() {
    // Draw the ball with a stroke and a filled color
    stroke(255);
    strokeWeight(2);
    fill(0, 100, 100);
    ellipse(this.x, this.y, this.r * 2);
  }

  deflect() {
    // Reverse direction if the ball hits the edges of the canvas
    if (this.x >= 390 || this.x <= 15) this.speedX *= -1;
    if (this.y >= 390 || this.y <= 15) this.speedY *= -1;
  }
}

function mousePressed() {
  // Toggle the ball's movement on mouse click
  ismoving = !ismoving;
}
