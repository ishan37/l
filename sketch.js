const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,100,50,50);
    ground= new Ground(200,390,400,20);
   
}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    ground.display(); 
    
}