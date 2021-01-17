
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,320,50);
	ball2 = new Ball(300,320,50);
	ball3 = new Ball(400,320,50);
	ball4 = new Ball(500,320,50);
	ball5 = new Ball(600,320,50);
	roof = new Roof(400, 100, 550, 50);

	line1 = new Chain(ball1.body, roof.body,-200)
	line2 = new Chain(ball2.body,roof.body,-100)
	line3 = new Chain(ball3.body,roof.body,0)
	line4 = new Chain(ball4.body,roof.body,100)
	line5 = new Chain(ball5.body,roof.body,200)


	Engine.run(engine);
	
}

function draw(){
  background(0);	  
  

	line1.display()
	line2.display()
	line3.display()
	line4.display()
	line5.display()
	


  	ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
	ball5.display();
	roof.display();
  
	
	text(mouseX+","+mouseY,mouseX,mouseY)
}

function mouseDragged(){

    
    Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY});
    
}