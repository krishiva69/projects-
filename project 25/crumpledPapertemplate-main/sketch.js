
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,650,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(200, 400, 40);

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}
function keyPressed(){
if(keyCode === UP_ARROW){
Body.applyForce(paper.body, paper.body.position, {x: 350, y: -350});
}
}
