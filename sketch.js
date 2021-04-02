var fixedRect,movingRect, r1,r2,r3, r4,r5,r6;
var ob1,ob2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.velocityX=1;
  fixedRect.shapeColor="yellow"
  movingRect= createSprite(400, 200, 30, 30);
  r1=createSprite(300,200,50,50);

  r2=createSprite(400,200,50,50);
  r3=createSprite(500,200,50,50);
  r4=createSprite(600,200,50,50);
  r4.velocityX=-1
  r5=createSprite(500,100,50,50);
  r5.shapeColor="pink";
  r5.velocityY=1;
  r6=createSprite(500,300,50,50);
  r6.velocityY=-1;
}

function draw() {
  background(20,25,200);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(fixedRect.x-movingRect.x)
  Touching(movingRect,fixedRect);
  Touching(movingRect,r1);
  Touching(movingRect,r2);
  Touching(movingRect,r3);
  Touching(movingRect,r4);
  Touching(movingRect,r5);
  Touching(movingRect,r6);
  Bounce(r4,fixedRect);
  Bounce(r5,r6);
  drawSprites();
}
