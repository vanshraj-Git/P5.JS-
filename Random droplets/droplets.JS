let ismoving=true,r;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if(ismoving){ 
  r=random(0,windowHeight)
  r1=random(0,windowWidth)
  t=random(0,1000)
  fill(0,0,r1)
  ellipse(r1,r,15,30)
  noStroke()
}}

function mousePressed(){
  ismoving=!ismoving;
}