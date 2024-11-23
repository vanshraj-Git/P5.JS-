let ismoving = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (ismoving) {
    background(0);
    frameRate(2);
    for (var x = 10; x <= width - 20; x += 25) {
      for (var y = 10; y <= height - 20; y += 25) {
        fill(random(265), random(265), random(265));
        rect(random(x, x + 5), random(y, y + 5), 20, 20);
      }
    }
  }
}
function mousePressed() {
  ismoving = !ismoving;
}
