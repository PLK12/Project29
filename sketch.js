const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var myEngine;
var myWorld;

var ground, leftground, rightground;
var rope;
var bridge;

var constraint;
var jointpoint, jointlink;
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  frameRate(80);

  ground = new Base(0,height-10,width*2,20,"white",true);
  leftground = new Base(200,height/2 +50,400,100,"white",true);
  rightground = new Base(width-230,height/2 +50,650,100,"white",true);

  bridge = new Bridge(15,{x:width/2 -400, y:height/2});
  jointpoint = new Base(width-600,height/2 +10, 40,20, "white",true);

  Matter.Composite.add(bridge.body, jointpoint);
  jointlink = new Link(bridge, jointpoint);
  
   for(var i=0; i<= 8; i++)
  {
      var x = random(width/2 - 200, width/2 + 300)
      var y = random(-10,140);
      var stone = new Stone(x,y, 40, 40, "white");
      stones.push(stone);
  }

}

function draw() {
  background(21);
  Engine.update(myEngine);

  ground.display();
  leftground.display();
  rightground.display();

  bridge.show();

  for(var stone of stones)
  {
    stone.display();
  }
 

}
