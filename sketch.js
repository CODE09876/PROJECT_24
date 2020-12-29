const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,ground,
wall1,wall2,wall3;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(200,450,40);
	ground = new Ground(width/2,680,width,20);
	wall1 = new  Dustbin(670,1200,20,50);
	wall2 = new  Dustbin(1050,650,20,10);
	wall3 = new  Dustbin(1280,650,10,50);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ball.display();
	ground.display();
	wall1.display();
	wall2.display();
	wall3.display();

	drawSprites();

	keyPressed();

}
function keyPressed(){
	if (keyDown === UP_ARROW){
		Matter.body.applyForce(ball.body,ball.body.position,{x:85,y: -85});
	}
}

