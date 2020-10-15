var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var block1, block2, block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {

	engine = Engine.create();
	world = engine.world;
	
	createCanvas(800, 700);

	var block1_options = {
		isStatic: true
	}
	var block2_options = {
		isStatic: true
	}
	var block3_options = {
		isStatic: true
	}

	block1 = Bodies.rectangle(300, 610, 20, 100, block1_options);
	World.add(world,block1);
	block2 = Bodies.rectangle(400, 650, 200, 20, block2_options);
	World.add(world,block2);
	block3 = Bodies.rectangle(500, 610, 20, 100, block3_options);
	World.add(world,block3);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill (255,0,0);
  rect(block1.position.x, block1.position.y, 20, 100);
  rect(block2.position.x, block2.position.y, 200, 20);
  rect(block3.position.x, block3.position.y, 20, 100);



  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody , false);
    
  }
}



