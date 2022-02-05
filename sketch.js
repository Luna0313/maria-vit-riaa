var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload(){
  path.loadImage ("path.png");
  boy.loadAnimation ("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);

  path.createSprite(0,400,50,50);
  path.addImage("path.png");
  path.velocityY = 1.2;
 
  path.scale=1.2;
  
  boy.createSprite(0,350,50,50);
  boy.addAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
  boy.velocityY =0.8;

  boy.scale=0.08;
  

leftBoundary = createSprite(0,0,100,800);

rightBoundary = createSprite(410,0,100,800);

}

function draw() {
  background(220);
  path.velocityY = 4;
  boy.mouseY = 4
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide("leftBoundary");
  boy.collide("rightBoundary");
  
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  

  drawSprites();
}
