
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var stone1;
var ground1;
var rubber1;

function setup() {
var canvas = createCanvas(1200, 600);
engine = Engine.create();
world = engine.world;

hammer1 = new Hammer(400, 400, 75, 50);
stone1 = new Stone (700, 320, 100, 100);
ground1 = new Ground (600,height,1200,20);
rubber1 = new Rubber (700, 400, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");

  hammer1.display();
  stone1.display();
  ground1.display();
  rubber1.display();
  
  drawSprites();
 
}



