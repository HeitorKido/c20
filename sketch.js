
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_opitions ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Bodies.circle(400,100,70,ball_opitions)
     World.add(world,ball)
	Engine.run(engine);
   

     ball1 = Bodies.circle(300,100,20,ball_opitions)
     World.add(world,ball1)
	Engine.run(engine);
   

    ball2 = Bodies.circle(500,100,100,ball_opitions)
     World.add(world,ball2)
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,70)
  drawSprites();

 rectMode(CENTER);
  background(0);
  ellipse(ball1.position.x,ball1.position.y,20)
  drawSprites();

   rectMode(CENTER);
  background(0);
  ellipse(ball2.position.x,ball2.position.y,100)
  drawSprites();
  

}
  



