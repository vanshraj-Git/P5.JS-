let ball1,ismoving=true;
function setup() {
  createCanvas(400, 400);
  ball1=new Ball(30,30,10,5,4)
}

function draw() {
  background(0);
  if(ismoving){
    ball1.move()
    ball1.deflect()
    }
  ball1.show()
}

class Ball{
  constructor(x,y,r,speedX,speedY){
    this.x=x
    this.y=y
    this.r=r
    this.speedX=speedX
    this.speedY=speedY
}

move(){
  this.x = this.x + this.speedX; 
  this.y = this.y + this.speedY;
}

show(){
  stroke(255)
  strokeWeight(2)
  fill(0,100,100)
  ellipse(this.x,this.y,this.r*2)
}
  deflect(){
    if(this.x>=390||this.x<=15)
      this.speedX*=-1
    if(this.y>=390||this.y<=15)
      this.speedY*=-1
  }
}

function mousePressed(){
  ismoving=!ismoving
}