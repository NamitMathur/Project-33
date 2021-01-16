const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gamestate="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,height-280);
  text("500",100,height-280);
  text("500",180,height-280);
  text("100",260,height-280);
  text("100",340,height-280);
  text("100",420,height-280);
  text("100",500,height-280);
  text("200",580,height-280);
  text("200",660,height-280);
  text("200",740,height-280);
  text(turn,400,20); 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>760){
       if(particle.body.position.x<270){
        score=score+500;
        particle=null;
        
       }else if(particle.body.position.x>271 && particle.body.position.x<630){
          score=score+100;
          particle=null;
         
        }else if(particle.body.position.x>630 && particle.body.position.x<790){
          score=score+200;
          particle=null;
        }
        if(turn>=5){
          gamestate="end";
        }
     }
     

     
   }
   if(gamestate==="end"){
     textSize(40);
     fill("red");
     text("Game Over",340,340);
     
   }
}
function mousePressed(){
  if(gamestate!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }
}