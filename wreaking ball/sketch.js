const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;




function setup() {
	createCanvas(3000, 800);
	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground (600,600,1200,10);
    
    block1 = new Block (900,100,70,70);
    block2 = new Block (900,100,70,70);
    block3 = new Block (900,100,70,70);
    block4 = new Block(900,100,70,70);
    block5 = new Block (900,100,70,70);
    block6 = new Block (900,100,70,70);
    block7 = new Block (800,100,70,70);
    block8 = new Block (800,100,70,70);
    block9 = new Block (800,100,70,70);
    block10 = new Block (800,100,70,70);  
    block11= new Block (800,100,70,70);
    block12= new Block (800,100,70,70);
    block13 = new Block (700,100,70,70);
    block14= new Block (700,100,70,70);
    block15= new Block (700,100,70,70);
    block16= new Block (700,100,70,70);
    block17= new Block (700,100,70,70);
    block18= new Block (700,100,70,70);
    block19= new Block (700,100,70,70);
    block20= new Block (700,100,70,70);
 wreakingBall = new ball (200,100,400);
    Sling1 = new SlingShot (wreakingBall.body,{x:250, y:100})



 
	
	Engine.run(engine);

}

function draw() {
    background("lightgreen");
    ground1.display ();
    
    block1.display ();
    block2.display ();
    block3.display ();
    block4.display ();
    block5.display ();
    block6.display ();
     block7.display ();
    block8.display ();
    block9.display ();
    block10.display ();
    block11.display ();
    block12.display ();
    block13.display ();
    block14.display ();
    block15.display ();
    block16.display ();
    block17.display ();
   block18.display ();
    block19.display ();
    block20.display ();
    wreakingBall.display ();
    Sling1.display ();


}

function mouseDragged () {
Matter.Body.setPosition (wreakingBall.body,{x:mouseX,y:mouseY});


}