function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0,0,0);                             //Black
    rectMode(CENTER);    
    rect(400, 300, 400, 400);

    fill(255,0,0);                         //Red
    rectMode(CENTER);
    rect(400, 300, 300, 300);

    fill(0,255,0);                         //Green
    rectMode(CENTER);
    rect(400, 300, 150, 150);

    fill(0,0,255);                         //Blue
    rectMode(CENTER);
    rect(400, 300, 75, 75);

    fill(255,255,255);                     //White
    rectMode(CENTER);
    rect(400, 300, 37, 37);
}

  
// there are functions like stroke(); nostroke();