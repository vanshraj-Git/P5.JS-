// A program where bubbles move randomly on the canvas, and a message is logged to the console when a bubble is clicked.

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
    // Initialize bubble position and radius
    this.x = x;
    this.y = y;
    this.r = r;
  }

  clicked(mx, my) {
    // Check if the mouse is within the bubble's radius
    let d = dist(mx, my, this.x, this.y);
    if (d < this.r) {
      console.log("Clicked on the bubble");
    }
  }

  move() {
    // Move the bubble randomly
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
    // Draw the bubble
    stroke(0, 150, 255, 150);
    strokeWeight(2);
    fill(0);
    ellipse(this.x, this.y, this.r * 2);
  }
}
