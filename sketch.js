//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
var ball,ground,log1,log2,log3,log4,log5,log6,stone1,stone2,stone3,backgroundIMG,woodIMG,star1,star2,star3,star4,star5,star6,starIMG,start,roof
var gameState="play"
var gameState="start"
var engine, world;
var ball
var ground
var count=0
var hero,heroIMG
var jungle1,Vright
var hero1,hero1_running
var fox1,fox1IMG
var fox2,fox2IMG,rod1,rod2
var gun,gunIMG
var gold,goldIMG
var cage1,cage1IMG
var cage2,cage2IMG,cube
var iron1,iron2,iron3
var bts,btsIMG
var gate,gateIMG,robber,robberIMG
var robber2,robber3
var metal1,metal2,metal3
var song
var door,doorIMG
var door2
var laser1,laser2,laser3,laser4
var invisiblerod, invisiblerod2, invisiblerod3
var stand1,stand2
var boat,boatIMG



function preload(){
  background2IMG=loadImage("background1.1.jpg")
  background1IMG=loadImage("backgroundd.jpg")
  background3IMG=loadImage("jimin.jpg")
  background4IMG=loadImage("background1.jpg")
  background5IMG=loadImage("btscry.jpg")
  background6IMG=loadImage("backgroundj.jpg")
  startIMG=loadImage("start1.png") 
  heroIMG =loadImage("btsjiminn.png")
  fox1IMG =loadImage("croco.png")
  fox2IMG=loadImage("croco.png")
  gunIMG=loadImage("Gun.png")
  goldIMG=loadImage("gold.png")
  cage1IMG=loadImage("cage1.png")
  cage2IMG=loadImage("cage2.png")
  btsIMG=loadImage("bts.png")
  gateIMG=loadImage("gate.png")
  robberIMG=loadImage("robber.png")
  doorIMG=loadImage("door.png")
  boatIMG=loadImage("boat1.png")
  
 // hero1_running=loadAnimation("vright.jpg")
}

function setup() {
  createCanvas(1600,700);
  rectMode(CENTER);

  hero=createSprite(750,200,20,100)
  hero.addImage(heroIMG)
  hero.scale=0.2
   
    invisiblerod=createSprite(1450,150,20,20,20)
   
    gold=createSprite(800,650,20,20)
    gold.addImage(goldIMG)
    gold.scale=0.2

    gate=createSprite(340,300,20,620)
    gate.addImage(gateIMG)
    gate.scale=1

   
    bts=createSprite(200,520,20,20)
    bts.addImage(btsIMG)
    bts.scale=0.5

    robber=createSprite(90,510,20,20)
    robber.addImage(robberIMG)
    robber.scale=0.2

    robber2=createSprite(230,520,20,20)
    robber2.addImage(robberIMG)
    robber2.scale=0.2

    robber3=createSprite(150,520,20,20)
    robber3.addImage(robberIMG)
    robber3.scale=0.2

    boat=createSprite(200,600,300,30)
    boat.addImage(boatIMG)
    boat.scale=0.8

 

    ground=createSprite(width/2,685,width,20);
    ground.shapeColor="#1A4314";
    roof=createSprite(width/2,10,width,20)
    roof.shapeColor="#1A4314";
   
    rod1=createSprite(10,270,20,810);
    rod1.shapeColor="#1A4314";
    rod2=createSprite(1590,270,20,810);
    rod2.shapeColor="#1A4314";
    log1=createSprite(750,350,500,100)
    log1.shapeColor="brown";
    log2=createSprite(1450,650,200,20)
    log2.shapeColor="blue";
    log3=createSprite(750,450,800,100)
    log3.shapeColor="brown";
    log4=createSprite(1300,200,200,20)
    log4.shapeColor="brown";
    stand1=createSprite(500,280,200,20)
    stand1.shapeColor="black"
    stand2=createSprite(800,400,200,20)
    stand2.shapeColor="black"

    laser1=createSprite(370,250,20,20)
    laser1.shapeColor="red"
    laser2=createSprite(1130,250,20,20)
    laser2.shapeColor="red"
    laser3=createSprite(520,200,20,20)
    laser3.shapeColor="red"
    laser4=createSprite(980,200,20,20)
    laser4.shapeColor="red"

    door=createSprite(1300,100,20,20)
    door.addImage(doorIMG)
    door.scale=0.3
    
    door2=createSprite(140,580,20,20)
    door2.addImage(doorIMG)
    door2.scale=0.3

    fox1=createSprite(550,600,20,20)
    fox1.addImage(fox1IMG)   
    fox1.scale=0.3

    gun=createSprite(800,370,20,20)
    gun.addImage(gunIMG)
    gun.scale=0.2

    fox2=createSprite(1300,600,20,20)
    fox2.addImage(fox1IMG)
    fox2.scale=0.3

    cube=createSprite(2000,2000,20,20)

    invisiblerod2=createSprite(300,600,20,100)
    invisiblerod3=createSprite(1500,600,20,100)

    laser1.velocityY=-17
    laser2.velocityY=-17
    laser3.velocityY+=10
    laser4.velocityY+=10

    fox1.velocityX=+35
    fox2.velocityX=-35

}

function draw() {
 background('white')
 background (background1IMG);
  

  

 
 
  

  if(gameState==="start"){
    background(background2IMG)
     start=createSprite(200,600,20,20)
     start.addImage(startIMG)
     start.scale=0.9
     start.display()
     start.visible=false;
     ground.visible=false;
     roof.visible=false
     rod1.visible=false
     rod2.visible=false
     log1.visible=false;
     log2.visible=false;
     log3.visible=false;
     robber.visible=false
     robber2.visible=false
     robber3.visible=false
     log4.visible=false;
    hero.visible=false
    door.visible=false
    door2.visible=false
    invisiblerod.visible=false
    gold.visible=false
    bts.visible=false
    gate.visible=false
    boat.visible=false
    gun.visible=false

    invisiblerod2.visible=false
     invisiblerod3.visible=false

    laser1.bounceOff(roof);
    laser1.bounceOff(log3)
    laser2.bounceOff(roof);
    laser2.bounceOff(log3)
    laser3.bounceOff(roof);
    laser3.bounceOff(log1)
    laser4.bounceOff(roof);
    laser4.bounceOff(log1)

    fox1.bounceOff(invisiblerod2)
    fox1.bounceOff(invisiblerod3)
    fox2.bounceOff(invisiblerod2)
    fox2.bounceOff(invisiblerod3)

     fox1.visible=false
     fox2.visible=false

    laser1.visible=false
    laser2.visible=false
    laser3.visible=false
    laser4.visible=false
    stand1.visible=false
    stand2.visible=false
  }

    if(gameState==="stage1"){
      textSize(40)
      fill("black")
      text("𝓒𝓗𝓞𝓞𝓢𝓔 𝓣𝓗𝓔 𝓒𝓞𝓡𝓡𝓔𝓒𝓣 𝓓𝓞𝓞𝓡 𝓣𝓞 𝓢𝓐𝓥𝓔 𝓑𝓣𝓢!!!",300,600)
      textSize(50)
      fill("black")
      text("🢃 LIFT",1380,600)
      textSize(50)
      fill("black")
      text("PASS THE LASERS",550,200)
      
     ground.display()
     ground.visible=true;
     roof.visible=true;
     rod1.visible=true;
     rod2.visible=true;
     log1.visible=true;
     log2.visible=true;
     log3.visible=true;
     log4.visible=true;
     hero.visible=true;
     door.visible=true;
     door2.visible=true;
     invisiblerod.visible=false
     hero.collide(ground)
     hero.collide(roof)
     hero.collide(log1)
     hero.collide(log2)
     hero.collide(log3)
     hero.collide(log4)
     hero.collide(rod1)
     hero.collide(rod2)
     laser1.bounceOff(roof);
     laser1.bounceOff(log3)
     laser2.bounceOff(roof);
     laser2.bounceOff(log3)
     laser3.bounceOff(roof);
     laser3.bounceOff(log1)
     laser4.bounceOff(roof);
     laser4.bounceOff(log1)

     fox1.bounceOff(invisiblerod2)
     fox1.bounceOff(invisiblerod3)
     fox2.bounceOff(invisiblerod2)
     fox2.bounceOff(invisiblerod3)

     laser1.visible=true
     laser2.visible=true
     laser3.visible=true
     laser4.visible=true

     if(keyDown("UP_ARROW")&& hero.y>=250){
      hero.velocityY = -12;
      
        }
        hero.velocityY = hero.velocityY + 0.7
  
     
  
        if(keyDown(RIGHT_ARROW)){
          hero.x+=5
        // hero1.changeImage("Vright")
        }
        if(keyDown(LEFT_ARROW)){
          hero.x-=5
         
        }

      

        if(hero.isTouching(door2)){
        

          hero.x=door2.x
          hero.y=door2.y
          door2.visible=false
          hero.visible=false
          laser1.velocityX=0
          laser1.velocityY=0
          laser2.velocityY=0
          laser2.velocityX=0
          laser3.velocityX=0
          laser3.velocityY=0
          laser4.velocityX=0
          laser4.velocityY=0
          ground.visible=false;
         roof.visible=false
         rod1.visible=false
         rod2.visible=false
         log1.visible=false;
         log2.visible=false;
         log3.visible=false;
         log4.visible=false;
        hero.visible=false
        door.visible=false
        door2.visible=false
        laser1.visible=false
        laser2.visible=false
        laser3.visible=false
        laser4.visible=false
          background( background3IMG)


          fill("yellow")
          stroke(15)
          text("NOOOOOOOOOOOOOOOOOO!!!!!!!",400,100)
          text("OUR CUTE MOCHI JIMIN IS LOST, BY CHOOSING THE",90,150)
          textSize(100)
          text("WRONG DOOR😱",400,300)
          textSize(100)
         text("😭😭😭😭😭😭",400,600)

         }

       if(hero.isTouching(log2)){
         log2.velocityY=-2
       }
      
       if(log2.isTouching(invisiblerod)){
        log2.velocityX=0
        log2.velocityY=0
       }


      if(hero.isTouching(laser1)|| hero.isTouching(laser2) || hero.isTouching(laser3)|| hero.isTouching(laser4)){
      background(background3IMG)
      laser1.x=500
      laser1.y=600
      hero.x=laser1.x
      hero.y=laser1.y
      laser1.velocityX=0
      laser1.velocityY=0
      laser2.velocityY=0
      laser2.velocityX=0
      laser3.velocityX=0
      laser3.velocityY=0
      laser4.velocityX=0
      laser4.velocityY=0
      ground.visible=false;
     roof.visible=false
     rod1.visible=false
     rod2.visible=false
     log1.visible=false;
     log2.visible=false;
     log3.visible=false;
     log4.visible=false;
    hero.visible=false
    door.visible=false
    door2.visible=false
    laser1.visible=false
    laser2.visible=false
    laser3.visible=false
    laser4.visible=false


    fill("white")
    stroke(15)
    text("NOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!",400,100)
    text("😱😱😱😡😡😡😡",600,150)
    fill("white")
    stroke(30)
    text("WHY?!",400,250)
    fill("white")
    stroke(30)
    textSize(50)
    text("WHY?!",600,250)
    stroke(30)
    textSize(100)
    text("WHY?!",800,250)
    textSize(300)
    fill("white")
    stroke(30)
    text("U!",400,600)
    textSize(60)
    fill("white")
    stroke(30)
    text("injured!!!!!",800,600)
    textSize(60)
    fill("white")
    stroke(30)
    text("Jimin!!!😭😭😭",1100,600)
      }
      
    }

    if(hero.isTouching(door)){
    
      background(background6IMG)
     laser1.x=2000
     laser1.y=2000
     laser2.x=2000
     laser2.y=2000
     laser3.x=2000
     laser3.y=2000
     laser4.x=2000
     laser4.y=2000
     laser1.velocityX=0
     laser1.velocityY=0
     laser2.velocityY=0
     laser2.velocityX=0
     laser3.velocityX=0
     laser3.velocityY=0
     laser4.velocityX=0
     laser4.velocityY=0
     robber.visible=true
     robber2.visible=true
     robber3.visible=true
     bts.visible=true
     gate.visible=true
     boat.visible=true
     gun.visible=true
     door2.x=2000
     door2.y=2000
     door.x=200
     door.y=190
     door.x=hero.x
     door.y=hero.y
     log2.x=2000
     log2.y=2000
     hero.collide(stand1)
     hero.collide(stand2)
     log1.x=2000
     log1.y=2000

    
     hero.collide(gate)
    
     if(hero.isTouching(gold)){
      gold.x=hero.x
      gold.y=hero.y
      gold.scale=0.1
    }
    
     if(hero.isTouching(gold)){
       gate.velocityY=-3
     }
     log3.x=2000
     log3.y=2000
     stand1.visible=true
     stand2.visible=true
     door.visible=false
     gold.visible=true

     fox1.bounceOff(invisiblerod2)
     fox1.bounceOff(invisiblerod3)
     fox2.bounceOff(invisiblerod2)
     fox2.bounceOff(invisiblerod3)
     invisiblerod2.visible=false
     invisiblerod3.visible=false

     fox1.visible=true
     fox2.visible=true

     if(hero.isTouching(gun)){
       gun.x=hero.x
       gun.y=hero.y
     }
    }

    if(hero.isTouching(fox1)&& gun.isTouching(fox1) ){
      fox1.velocityX=0
      fox1.velocityY=0
      fox1.x=2000
      fox1.y=2000
     

     
    }

    if( hero.isTouching(fox2)&& gun.isTouching(fox2)){
     
      fox2.velocityX=0
      fox2.velocityY=0
      fox2.x=2000
      fox2.y=2000

     
    }

   

   

    if(fox1.isTouching(cube)&& fox2.isTouching(cube)){
      fox1.visible=false
      fox2.visible=false
      textSize(40)
      fill("black")
      text("NO MORE CROCOS BUT STILL ROBBERS!!!",420,600)
      gun.x=590
      gun.y=220
      gun.visible=false
    
      

    }

    if(hero.isTouching(boat)&& gold.isTouching(boat)){
      background(background4IMG)
      ground.visible=false;
         roof.visible=false;
         log1.visible=false;
         log2.visible=false;
         log3.visible=false;
         log4.visible=false;
         rod1.visible=false
         rod2.visible=false
         fox1.visible=false
         fox2.visible=false
         fox1.velocityX=0
         fox1.velocityY=0
         fox2.velocityX=0
         fox2.velocityY=0
         hero.visible=false
         gate.visible=false
         bts.visible=false
        boat.visible=false
        gold.visible=false
        stand2.visible=false
        stand1.visible=false
         gun.visible=false
         robber.visible=false
         robber2.visible=false
         robber3.visible=false
         gold.visible=false
         stand1.visible=false
         stand2.visible=false
        hero.x=boat.x
        hero.y=boat.y
        door.x=200
        door.y=600
        
        textSize(100)
        fill("black")
        text("YOU PROVED THAT YOUR AN",100,100)
        text("ARMY",700,200)
        textSize(40)
        fill("black")
        text("OH GOODNESS, YOU SAVED BTS AGAIN!",400,300)
        text("AND YOU GOT A CHANCE TO MEET YOUR BIAS IN PERSONAL 💜🤗🤗🤗",150,400)
    }
     
   

    if(hero.isTouching(fox1) && door.isTouching(fox1) || hero.isTouching(fox2) && door.isTouching(fox2)){
      background(background3IMG)
       textSize(40)
       fill("white")
       stroke(15)
       text("NOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!",400,100)
       text("😱😱😱😡😡😡😡",600,150)
       fill("white")
       stroke(30)
       text("WHY?!",400,250)
       fill("white")
       stroke(30)
       textSize(50)
       text("WHY?!",600,250)
       stroke(30)
       textSize(100)
       text("WHY?!",800,250)
       textSize(300)
       fill("white")
       stroke(30)
       text("U!",600,600)
       textSize(40)
       fill("white")
       stroke(30)
       text("injured!!!!!",900,600)
       textSize(60)
       fill("white")
       stroke(30)
       text("Jimin!!!😭😭😭",1100,600)
       
   
   
   
    
       rod1.visible=false
       rod2.visible=false
      ground.visible=false;
        roof.visible=false;
        log1.visible=false;
        log2.visible=false;
        log3.visible=false;
        log4.visible=false;
        robber.visible=false
        robber2.visible=false
        robber3.visible=false
        boat.visible=false
        stand1.visible=false
        stand2.visible=false
       
        fox1.visible=false
        fox2.visible=false
        fox1.velocityX=0
        fox1.velocityY=0
        fox2.velocityX=0
        fox2.velocityY=0
        hero.visible=false
        gate.visible=false
        bts.visible=false
       
        gun.visible=false
        gold.visible=false
   
        hero.x=fox1.x
        hero.y=fox1.y

        door.x=fox1.x
        door.y=fox1.y
         
      
   
     }

     
   

  
    
   

   
 
    if(mousePressedOver(start)){
  
      gameState="stage1"
     
     }

    
  drawSprites()
}




