const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygonImg;

function preload(){
  polygonImg = loadImage("Hexagon.png");
}

function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(200,200,40);
  World.add(world,polygon);
  
  slingshot = new Slingshot(this.polygon,{x:100,y:200});

  ground = new Ground(600,585,1200,30);

  platform1 = new Ground(500,500,250,10);
  platform2 = new Ground(900,400,200,10);
  
  //First Pyramid
  //1st Row
  box1 = new Box(455,480,30,40);
  box2 = new Box(470,480,30,40);
  box3 = new Box(485,480,30,40);
  box4 = new Box(500,480,30,40);
  box5 = new Box(515,480,30,40);
  box6 = new Box(530,480,30,40);
  box7 = new Box(545,480,30,40);  

  //2nd Row
  box8 = new Box(470,460,30,40);
  box9 = new Box(485,460,30,40);
  box10 = new Box(500,460,30,40);
  box11 = new Box(515,460,30,40);
  box12 = new Box(530,460,30,40);

  //3rd Row
  box13 = new Box(485,440,30,40);
  box14 = new Box(500,440,30,40);
  box15 = new Box(515,440,30,40);

  //4th Row
  box16 = new Box(500,420,30,40);

  //Second Pyramid
  //1st Row
  box17 = new Box(870,380,30,40);
  box18 = new Box(885,380,30,40);
  box19 = new Box(900,380,30,40);
  box20 = new Box(915,380,30,40);
  box21 = new Box(930,380,30,40);

  //2nd Row
  box22 = new Box(885,360,30,40);
  box23 = new Box(900,360,30,40);
  box24 = new Box(915,360,30,40);

  //3rd Row
  box25 = new Box(900,340,30,40);

}

function draw() {
  background("#11254D");  
  Engine.update(engine);

  ellipse(polygon.position.x,polygon.position.y,40);
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 50, 40);

  ground.display();

  platform1.display();
  platform2.display();

  fill("#83CDEB");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("#31E0D0");
  box13.display();
  box14.display();
  box15.display();

  fill("#808080");
  box16.display();

  fill("#83CDEB");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("#31E0D0");
  box22.display();
  box23.display();
  box24.display();

  fill("pink");
  box25.display();

  slingshot.display();

  fill("red");
  textSize(20);
  text("Drag The Hexagonal Stone And Release It, To Launch It Towards The Blocks",300,50);

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}