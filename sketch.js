
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(100,380,60);

	ground = new Ground(600,390,1200,20);
	
	dustbin = new Dustbin(1000,370);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  dustbin.display();
  

  ball1.display();

  ground.display();

  

  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:130,y:-90});

	}

}



