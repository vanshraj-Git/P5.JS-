let bubble=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i=0;i<5;i++){
  let x = random(width);
  let y = random(height);
  let r = random(20, 50);
  let b = new Bubble(x, y, r);
  bubble.push(b)
}}

function mousePressed() {
  for(i=0;i< bubble.length;i++){
  bubble[i].clicked(mouseX,mouseY);
}}
  


function draw() {
  background(0);
  for(i=0;i< bubble.length;i++){
  bubble[i].move();
  bubble[i].show();

}}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  clicked(mx,my) {
    let d = dist(mx, my, this.x, this.y);
    if (d < this.r) {
      console.log("Clicked on the bubble");
      
    }
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
    stroke(0, 150, 255, 150);
    strokeWeight(2);
    fill(0);
    ellipse(this.x, this.y, this.r * 2);
  }
}