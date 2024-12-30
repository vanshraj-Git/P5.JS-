let r=10,bubble=[],b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i=0;i<=10;i++){
    b=new pop(random(width),random(height),random(10,50))
    bubble.push(b)
  }
}

function draw() {
  background(0)
  frameRate(20)
  for(i=0;i<=5;i++){
    bubble[i].show()
    bubble[i].clicked()
  }
}

function mousePressed(){
 }

class pop{
  constructor(x,y,r){
    this.x=x
    this.y=y
    this.r=r
    this.weight=5
  }
  show(){
    stroke(0, 150, 255, 150)
    strokeWeight(this.weight)
    fill(0)
    ellipse(this.x,this.y,this.r)
  } 
  clicked(){
    this.r+=this.weight
    if(this.r>=150){
      this.weight=0
    }
  }
}
