let Raindrop1,
  Raindrop2,
  Raindrop3,
  Raindrop4,
  Raindrop5,
  ismoving = true;

function setup() {
  createCanvas(400, 400);
  Raindrop1 = new Raindrop(100, 50, 4);
  Raindrop2 = new Raindrop(200, 150, 3);
  Raindrop3 = new Raindrop(300, 100, 2);
  Raindrop4 = new Raindrop(50, 100, 5);
  Raindrop5 = new Raindrop(350, 100, 5);
}

function draw() {
  background(0);
  Raindrop1.show();
  Raindrop2.show();
  Raindrop3.show();
  Raindrop4.show();
  Raindrop5.show();
  if (ismoving) {
    Raindrop1.move();
    Raindrop2.move();
    Raindrop3.move();
    Raindrop4.move();
    Raindrop5.move();
    Raindrop1.restart();
    Raindrop2.restart();
    Raindrop3.restart();
    Raindrop4.restart();
    Raindrop5.restart();
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
    if (this.y >= 400) {
      this.y = 0;
    }
  }
}
function mousePressed() {
  ismoving = !ismoving;
}
