// A program where an "enemy" moves towards the mouse position and can pause/resume movement on a mouse click.

let enemy1, ismoving = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialize the enemy with position, size, and speed
  enemy1 = new Enemy(20, 20, 20, 7);
}

function draw() {
  // Clear the background and display the enemy
  background(0);
  enemy1.show();

  // Update enemy location if movement is enabled
  if (ismoving) {
    enemy1.location();
  }
}

class Enemy {
  constructor(x, y, size, speed) {
    // Initialize enemy position, size, and speed
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  show() {
    // Draw the enemy as a purple circle
    stroke(0);
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.size);
  }

  location() {
    // Calculate the unit vector direction towards the mouse
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let magnitude = sqrt(dx * dx + dy * dy);
    let unitX = dx / magnitude;
    let unitY = dy / magnitude;

    // Update the enemy's position along the unit vector
    this.x += unitX * this.speed;
    this.y += unitY * this.speed;

    // Print debug information about movement
    print(int(dx), int(dy), int(magnitude));
  }
}

function mousePressed() {
  // Toggle the enemy's movement on mouse click
  ismoving = !ismoving;
}
