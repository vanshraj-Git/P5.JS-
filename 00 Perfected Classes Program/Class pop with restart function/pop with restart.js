// A program where bubbles grow in size and restart once all have "popped

let r = 10, bubble = [], b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  restart(); // Initialize the bubbles
}

function draw() {
  background(0);
  frameRate(20);

  // Display and grow bubbles
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].show();
    bubble[i].clicked();
  }

  // Restart the sketch when all bubbles are "popped"
  let allPopped = bubble.every(b => b.weight === 0); // Check if all bubbles are popped
  if (allPopped){
    restart();
  }
}

function restart() {
  bubble = []; // Clear the existing bubbles
  for (let i = 0; i < 5; i++) { // Create 10 new random bubbles
    b = new pop(random(width), random(height), random(10, 50));
    bubble.push(b);
  }
}

class pop {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.weight = 5; // Growth rate
  }
  show() {
    stroke(0, 150, 255, 150);
    strokeWeight(this.weight);
    fill(0);
    ellipse(this.x, this.y, this.r);
  }
  clicked() {
    this.r += this.weight; // Increase radius
    if (this.r >= 150) {
      this.weight = 0; // Stop growing when max size is reached
    }  
  }
}
