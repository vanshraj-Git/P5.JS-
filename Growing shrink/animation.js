x=5;
y=5;
z=400;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  rect(z,z,x,y)
  x++;
  y++;
  z--;
  if(x==400){
     x-=2;
    y-=2;
     }
}