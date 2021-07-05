
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall;
var ball2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 3,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rock = Bodies.circle(300,20,10);
  World.add(world,rock);

  wall = Bodies.rectangle(300, 200, 200, 20, {isStatic: true});
  World.add(world, wall);

  ball2 = Bodies.circle(50,20,20, {restitution: 0.1});
  World.add(world, ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background("aqua");
  Engine.update(engine);
  
  fill("white");
  ellipse(ball.position.x,ball.position.y,20);

  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
 
 fill("gray");
 ellipse(rock.position.x, rock.position.y, 10);

 fill("red");
 rect(wall.position.x, wall.position.y, 200, 20);

 fill(47);
 ellipse(ball2.position.x, ball2.position.y, 20);
}

