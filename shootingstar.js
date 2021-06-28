function setup() {
  createCanvas(400, 400);
  x=width/3
  y=height/3
}

function draw() {
  background(51, 102, 204);
  x=x+random(1,10);
  y=y-1;
  if(y<0){
    y=height/4
  }
  stroke(0,0,0);
  fill(255,242,0);
  ellipse(x,y,10,10);
  
  stroke(0,0,0);
  fill(250,30,100);
  rect(100,300,100,190);//building 1
  
  stroke(0,0,0);
  fill(20,30,200);
  rect(50,250,40,250,10);//building 2
  
  stroke(0,0,0);
  fill(20,100,150);
  rect(175,275,330,250,10);//building 3
  
  stroke(0,0,0);
  fill(10200,25,10);
  rect(5,275,50,250,10);//building 4
  
  stroke(0,0,0);
  fill(255,255,255);
  ellipse(100,100,100,100);
}