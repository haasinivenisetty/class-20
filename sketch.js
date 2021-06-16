const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,bodies

function setup() {
  createCanvas(400,400);
engine=Engine.create()
world=engine.world
var option={
  restitution:0.8,
  frictionAir:0.01
}
bodies=Bodies.circle(200,200,20,option)
World.add(world,bodies)
var groundOption={
  isStatic:true
}
 ground=Bodies.rectangle(200,390,400,20,groundOption) 
 World.add(world,ground)

}


function draw() 
{
  background(51);
  Engine.update(engine)
  ellipseMode(RADIUS)
  fill ("purple")
  ellipse(bodies.position.x,bodies.position.y,20,20)
  rectMode(CENTER)
  fill ("lightblue")
  rect(ground.position.x,ground.position.y,400,20)

  
  
}

