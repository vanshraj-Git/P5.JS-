// A program where bubbles move randomly and change brightness when clicked, cycling through a range from 0 to 255.

let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create 5 bubbles with random positions and sizes
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 50);
    let b = new Bubble(x, y, r);
    bubble.push(b);
  }
}

function mousePressed() {
  // Check if a bubble is clicked
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  // Show and move all bubbles
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    // Initialize bubble position, radius, and brightness
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(mx, my) {
    // Check if the mouse is within the bubble's radius
    let d = dist(mx, my, this.x, this.y);
    if (d < this.r) {
      // Change the brightness when clicked
      this.brightness += 250;
      if (this.brightness > 255) {
        this.brightness = 0; // Reset if it exceeds 255
      }
    }
  }

  move() {
    // Move the bubble randomly
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
    // Draw the bubble with the current brightness
    stroke(0, 150, 255, 150);
    strokeWeight(2);
    fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}
