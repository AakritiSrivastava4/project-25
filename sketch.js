
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=createSprite(600,665,1200,10);
   ground1.shapeColor="yellow"

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	

	bottomsupport= Bodies.rectangle(800,635,200,20,{isStatic:true});
	World.add(world,bottomsupport);

	

	ball=Bodies.circle(200,650,20,{isStatic:true});
	World.add(world,ball);

   pic=loadImage("dustbingreen.png");
   paper=loadImage("paper.png");
}


function draw() {
  rectMode(CENTER);
  background(255);
  fill ("magenta")
  image(paper,ball.position.x-10,ball.position.y-20,40,40);
  imageMode(CENTER);
 image(pic,800,525,200,250);

  drawSprites();

 
}
 
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}

}



