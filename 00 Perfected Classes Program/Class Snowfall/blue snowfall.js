let raindrops = [],ismoving=true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i =0;i<=250;i++) {
    raindrops.push(new Raindrop(random(width),random(height), random(2, 5)));
  }
}

function draw() {
  background(0);
  for (let raindrop of raindrops) {
    raindrop.show();
    if (ismoving) {
      raindrop.move();
      raindrop.restart();
    }
  }
}
class Raindrop {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  show() {
    stroke(random(50), 0, random(255));
    fill(0, 0, 150);
    ellipse(this.x, this.y, 10, 10);
  }
  move() {
    this.y = this.y + this.speed;
  }
  restart() {
    if (this.y >= windowHeight) {
      this.y = 0;
    }
  }
}
function mousePressed() {
  ismoving = !ismoving;
}

