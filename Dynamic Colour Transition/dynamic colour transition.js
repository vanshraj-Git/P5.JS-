let c,brightness;

function setup() {
  createCanvas(windowWidth,windowHeight);
  

}
function draw(){
   brightness=map(mouseX,0,windowWidth,0,255)
    background(brightness);
  stroke(100)
  strokeWeight(5)
  line(0, windowHeight-50, windowWidth,windowHeight-50);
    line(0, windowHeight/2, windowWidth,windowHeight/2);
  line(0, 50, windowWidth,50);
 windowwidth=random(0,255);
 b=map(mouseX,0,windowWidth,0,255)
  fill(b,0,0)
    ellipse(mouseX,windowHeight-50,50,50)
  fill(0,b,0)
    ellipse(mouseX,50,50,50)
  fill(0,0,b)
    ellipse(mouseX,windowHeight/2,50,50)
  }