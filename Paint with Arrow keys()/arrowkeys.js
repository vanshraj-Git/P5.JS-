// Click on the canvas to begin detecting key presses.

let x = 50;
let y = 50;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200);
  describe(
    'A gray square with a black circle at its center. The circle moves when the user presses an arrow key. It leaves a trail as it moves.'
  );
}

function draw() {
  // Update x and y if an arrow key is pressed.
  if (keyIsDown(LEFT_ARROW) === true) {
    x -= 1;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    x += 1;
  }

  if (keyIsDown(UP_ARROW) === true) {
    y -= 1;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    y += 1;
  }

  // Style the circle.
  fill(0);

  // Draw the circle.
  circle(x, y, 5);
}