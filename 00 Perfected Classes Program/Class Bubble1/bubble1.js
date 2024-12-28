// A program where bubbles are created by dragging the mouse and bounce vertically within the canvas.

let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  // Add a new bubble at the dragged mouse position with a random radius
  bubble.push(new B1(mouseX, mouseY, random(30, 60)));
}

function draw() {
  // Clear the background and display all bubbles
  background(0);
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].show();
    bubble[i].move();
  }
}

class B1 {
  constructor(w, h, r) {
    // Initialize bubble position, radius, and vertical velocity
    this.w = w;
    this.h = h;
    this.r = r;
    this.velocity = 2;
  }

  show() {
    // Draw the bubble with a blue stroke and no fill
    stroke(0, 150, 255, 150);
    strokeWeight(3);
    fill(0);
    ellipse(this.w, this.h, this.r);
  }

  move() {
    // Move the bubble vertically and bounce off canvas edges
    this.h += this.velocity;
    if (this.h >= height - this.r / 2 || this.h <= this.r / 2) {
      this.velocity *= -1;
    }
  }
}
