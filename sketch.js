const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1,wall2;
var bridge,jointpoint;

function setup() {
  createCanvas(500,500 );
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall1 = new Base(50,400,50,50);
  wall2 = new Base(450,400,50,50);

  bridge = new Bridge(10,{x:250,y:250});
  jointpoint = new Base(10,10,10,10);

  Matter.Composite.add(bridge.body,jointpoint)

}

function draw() {
  background(51);

  wall1.display();
  wall2.display();
  
  Engine.update(engine);

  for(var i =0 ; i<0 ;  i++) {
    var x = random(width/2 -200, width/2 +300)
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }

}

