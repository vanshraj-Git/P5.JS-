let spaceship1;

function setup() {
  createCanvas(540, 540);
  spaceship1=new spaceship(100,250,30,20)
}

function draw() {
  background(0);
  spaceship1.show()
  spaceship1.move()
}

class spaceship{
  constructor(x,y,w,h){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
  }
  show(){
    stroke(220)
    strokeWeight(5)
    fill(200,50,150)
    rect(this.x,this.y,this.w,this.h)
  }
  move(){
    if(keyIsDown(LEFT_ARROW)){
      this.x=this.x-10;
      
      if (this.x > width - this.w){
        this.x = width - this.w;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x=this.x+10
      if (this.x < 0) {
        this.x = 0;
     }
    }
      
  }
}