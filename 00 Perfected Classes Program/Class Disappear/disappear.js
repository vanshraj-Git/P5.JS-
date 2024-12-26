let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create 5 bubbles
  for (let i = 0; i < 10; i++) {
    let b = new Disappear(random(width), random(height), random(30, 50));
    bubble.push(b);
  }
}

function draw() {
  background(0);
  // Show and move each bubble
  for (let i = bubble.length - 1; i >= 0; i--) {
    bubble[i].show();
    bubble[i].move();
  }
}

function mousePressed() {
  for (let i = bubble.length - 1; i >= 0; i--) {
    if (bubble[i].isClicked(mouseX, mouseY)) {
      bubble.splice(i, 1); // Remove bubble on click
    }
  }
}

class Disappear {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.fillColor = 0; // Initial fill color
  }

  show() {
    stroke(220);
    strokeWeight(3)
    fill(this.fillColor);
    ellipse(this.x, this.y, this.r * 2); // Diameter
  }

  move() {
    // Random movement (+2 or -2)
    this.x += random([-2, 2]);

    // Constrain to canvas boundaries
    this.x = constrain(this.x, this.r, width - this.r);
    this.y = constrain(this.y, this.r, height - this.r);
  }

  isHovered(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.r; // Check if mouse is inside the bubble
  }

  isClicked(mx, my) {
    return this.isHovered(mx, my); // Reuse hover logic for click detection
  }

  // Change fill color on hover
  updateHover(mx, my) {
    this.fillColor = this.isHovered(mx, my) ? 255 : 0;
  }
}

function mouseMoved() {
  // Update hover state for all bubbles
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].updateHover(mouseX, mouseY);
  }
}
