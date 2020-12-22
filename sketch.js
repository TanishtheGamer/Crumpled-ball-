
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var engine, world;
var ball1;
var dustbin1, dustbin2, dustbin3;
var ground1;
}

function setup() {
	createCanvas(800, 700);
	dustbin1 = new Dustbin(700,320,20,100);
    dustbin2 = new Dustbin(700,320,100,20);
    dustbin3 = new Dustbin(700,240,20,100);
	ball1 = new Ball(100,100);
	ground1 = new Ground(400,700,height)

	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    ball1.display();
    ground.display();
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW){
ball1.velocityY=-10;     
	}
}

