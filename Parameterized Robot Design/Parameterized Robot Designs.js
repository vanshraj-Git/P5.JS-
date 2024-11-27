function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    robotface(10, 0, 20, 20);
    robotface(300, 300, 20, 20);
    robotface(300, 0, 20, 20);
    robotface(150, 150, 20, 20);
    robotface(10, 300, 20, 20);
  }
  
  function robotface(a, b, d, c) {
    strokeWeight(2);
    rect(a + 10, b + 10, d, d);
    rect(a + 70, b + 10, d, d);
    rect(a + 40, b + 40, d, d);
    rect(a + 10, b + 70, d * 4, d);
  }
  