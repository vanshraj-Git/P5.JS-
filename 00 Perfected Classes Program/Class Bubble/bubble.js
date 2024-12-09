let bubble=[]

function setup(){
  createCanvas(windowWidth, windowHeight);
}  

function mousePressed() {
    bubble.push(new B1(mouseX,mouseY,random(30,60)))
}

function draw() {
  background(0);
  for(i=0;i<bubble.length;i++){
  bubble[i].show()
  bubble[i].move()
  }}

class B1 {
  constructor(w,h,r){
    this.w=w
    this.h=h
    this.r=r
    this.velocity=2
  }
 show() {
  stroke(0, 150, 255, 150); 
  strokeWeight(3);          
  fill(0, 200, 255, 100);   
  ellipse(this.w, this.h, this.r); 
}

  move(){
    this.h+=this.velocity
    if(this.h>=height-this.r/2||this.h<=0){
      this.velocity*=-1
    }
  }
}