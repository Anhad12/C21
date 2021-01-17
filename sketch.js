var r1,r2,r3, r4,r5,r6;
var r8,r9
function setup() {
  createCanvas(800,400);
 r1=createSprite(400, 200, 50, 50);
r2=createSprite(400,300,50,50);
r3=createSprite(400,100,50,50);
r4 = createSprite(100,100,50,50);
r3.velocityX=-5;
r4.velocityX=5;
r3.shapeColor="orange";
r4.shapeColor="blue";
r5= createSprite(100,300,50,50);
r6= createSprite(200,300,50,50);
r7= createSprite(300,300,50,50);
r8= createSprite(300,30,50,50);
r9= createSprite(300,330,50,50);
r8.velocityY=5;
r9.velocityY=-5;
r8.shapeColor="orange";
r9.shapeColor="blue";
}

function draw() {
  r1.x=World.mouseX;
  r1.y=World.mouseY;
  background("green");  
  //ALGORITHM 1: CHANGE COLORS AFTER DETETCING COLLISION
  if( anhad(r1,r5)){
   r1.shapeColor="red";
   r5.shapeColor="red";
  }
  else{
  r1.shapeColor="grey";
   r5.shapeColor="grey"; 
  }
  
  //ALGORITHM 2: BOUNCE OFF IF THEY R TOUCHING EACH OTHER.
 anhad2(r8,r9);
 anhad2(r3,r4);

  
  drawSprites();
}

