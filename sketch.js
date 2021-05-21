const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(235,234,100)
    stone = new Stone(100,345)
    iron1 = new Iron(200,500)
    iron2 = new Iron(760,300)
    iron3 = new Iron(230,433)
    iron4 = new Iron(234,314)

    


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();

    
 
}