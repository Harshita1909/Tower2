const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

//declaring ground and engine
var ground,engine,world;

//declaring blocks
var block1,block2,block3,block4,block5,block6,block7,block8,block9;

//declaring slingShot and polygon
var slingShot,polygon;


function setup() {
	createCanvas(1300, 600);
 	engine= Engine.create();
	world = engine.world;

     Engine.run(engine);
	
	ground=new Ground(390,245,300,10);

	block1=new Block(330,235,30,40);
	block2=new Block(360,235,30,40);
	block3=new Block(390,235,30,40);
	block4=new Block(420,235,30,40);
	block5=new Block(360,195,30,40);
	block6=new Block(390,195,30,40);
	block7=new Block(420,195,30,40);
	block8=new Block(450,235,30,40);
	block9=new Block(390,155,30,40);

	polygon=new Polygon(100,225,20);

	slingShot=new SlingShot(polygon.body,{x:60,y:245})

}
function draw(){
    background("pink");
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();

 polygon.display();

 slingShot.display();
}
//create mouseDragged function here
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
	}
	
	//create mouseReleased function here
	function mouseReleased(){
	  slingShot.fly();
	}
