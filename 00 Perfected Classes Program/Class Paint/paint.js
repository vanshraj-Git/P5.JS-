let paint1,ismoving=true;
function setup() {
    background(220);
  createCanvas(windowWidth, windowHeight);
  paint1=new Paint(20,20,100,1)
}

function draw() {
  paint1.show()
  if(ismoving){
  paint1.location()
}}

class Paint{
  constructor(x,y,size,speed){
    this.x=x
    this.y=y
    this.size=size
    this.speed=speed
  }
  show(){
    stroke(0)
    fill(150,0,255)
    ellipse(this.x,this.y,this.size)
  }
  location(){
    this.x=mouseX
    this.y=mouseY
  }
}

function mousePressed(){
  ismoving=!ismoving
}