var PLAY = 1;
var END = 2;
var TBC=3;
var START=0;
var gameState = START;
var Thalleous, Thaalleous_running, Thalleous_die, Thalleous_Sword;
var ground, invisibleGround, groundImage;
var Thalleous_jump,Thalleous_Protect,Thalleous_die,Thalleous_Stand;
var backgroundImg1,backgroundImg2,backgroundImg3
var TreesGroup,TreesGroup2,SwordGroup;
var backgroundImg4;
var score;
var Volatris,VoltarisGroup,Voltaris_attack;
var Volatris2,VoltarisGroup2,Voltaris_attack2;
var gameOverImg,restartImg;
var Grim,GrimGroup,GrimS;
var SwordImg,attack=2;
var spear,spearGroup,spearImg;
var Songs,songsGroup,P1,P2,P3,P4;
var SpearS;
var PlayImg;
var note1,note2;
var portal,portalImg;
var thuder,tbc1;
function preload(){
  //Thalleous   
  Thalleous_running = loadAnimation("Thalleous/T1.png","Thalleous/T2.png","Thalleous/T3.png","Thalleous/T4.png","Thalleous/T5.png","Thalleous/T6.png","Thalleous/T7.png","Thalleous/T8.png","Thalleous/T9.png","Thalleous/T10.png","Thalleous/T11.Png");
    Thalleous_Sword=loadAnimation("Thalleous/TS1.png","Thalleous/TS2.png","Thalleous/TS3.png","Thalleous/TS4.png","Thalleous/TS5.png","Thalleous/TS6.png","Thalleous/TS7.png","Thalleous/TS8.png","Thalleous/TS9.png","Thalleous/TS10.png","Thalleous/TS11.png")
Thalleous_jump=loadAnimation("Thalleous/J1.png","Thalleous/J2.png","Thalleous/J3.png","Thalleous/J4.png","Thalleous/J5.png","Thalleous/J6.png","Thalleous/J7.png","Thalleous/J8.png")
Thalleous_SwordJ=loadAnimation("Thalleous/SJ1.png","Thalleous/SJ2.png","Thalleous/SJ3.png","Thalleous/SJ4.png","Thalleous/SJ5.png","Thalleous/SJ6.png","Thalleous/SJ7.png","Thalleous/SJ8.png","Thalleous/SJ9.png")
Thalleous_Protect=loadAnimation("Thalleous/P1.png","Thalleous/P2.png","Thalleous/P3.png","Thalleous/P4.png","Thalleous/P5.png","Thalleous/P6.png","Thalleous/P7.png","Thalleous/P8.png","Thalleous/P9.png")
Thalleous_die=loadAnimation("Thalleous/D3.png","Thalleous/D4.png");
Thalleous_Stand=loadAnimation("Thalleous/EndT.png")

//Voltaris
Voltaris_attack=loadAnimation("Voltaris/V1.png","Voltaris/V2.png","Voltaris/V3.png","Voltaris/V4.png","Voltaris/V5.png","Voltaris/V6.png","Voltaris/V7.png","Voltaris/V8.png","Voltaris/V9.png")
Voltaris_attack2=loadAnimation("Voltaris/VS1.png","Voltaris/VS2.png","Voltaris/VS3.png","Voltaris/VS4.png")
spearImg=loadImage("Voltaris/Spear.png");
GrimS=loadAnimation("Enemy/Grim.png","Enemy/Grim2.png","Enemy/Grim3.png","Enemy/Grim4.png")
  //Obstacles
 Tree1 = loadImage("Background/Mt.png");
  Tree2 = loadImage("Background/MT1.png");
  Tree3 = loadImage("Background/OT.png");
  //Songs
P1=loadImage("Power/PS1.png");
P2=loadImage("Power/PS2.png");
P3=loadImage("Power/PS3.png");
P4=loadImage("Power/PS4.png");
SoImg=loadImage("H/SongsP.png");
thunder=loadSound("Sound/thunder.mp3");
restartImg=loadImage("Background/restart.png")
gameOverImg=loadImage("Background/gameover.png")
die=loadSound("Sound/die.mp3")
Talk1Img=loadImage("H/TT1.png")
Talk2Img=loadImage("H/DT1.png")
Talk3Img=loadImage("H/TT2.png")
Talk4Img=loadImage("H/DT2.png")

EndingImg=loadImage("H/EndC.png");
TbcImg=loadImage("Background/Tob.png");
deathSinger_Come=loadAnimation("DeathSinger/D1.png","DeathSinger/D2.png","DeathSinger/D3.png","DeathSinger/D4.png","DeathSinger/D5.png","DeathSinger/D6.png","DeathSinger/D7.png","DeathSinger/D8.png")
DeathSinger_S=loadImage("DeathSinger/D1.png")
//Start to End
PlayImg=loadImage("H/PS.png")
PlayImg2=loadImage("H/PA.png")
PlayImg3=loadImage("H/PP.png")
PlayImg4=loadImage("H/PX.png")
portalImg=loadImage("DeathSinger/Portal.png")
note1Img=loadImage("H/note1.png")
note2Img=loadImage("H/note2.png")

SpearS=loadSound("Sound/swoosh.mp3");
VolS=loadSound("Sound/sword.mp3");
  jumpSound = loadSound("Sound/jump.mp3")
  SwordImg=loadImage("Thalleous/Sword.png")
MySound=loadSound("Loop/MySound.mp3")

// Background
backgroundImg1=loadImage("Background/Fight.png")
backgroundImg2=loadImage("Background/Forest2.png")
backgroundImg3=loadImage("Background/River.png")
backgroundImg4=loadImage("Background/StartM.png")
backgroundImg5=loadImage("Background/Forest.png")
backgroundImg6=loadImage("Background/Fight.png")
backgroundImg7=loadImage("Background/End.png")
backgroundImg8=loadImage("Background/StartM2.png")
}

function setup() {
  createCanvas(1100,520);
   MySound.loop();
  //creating background
  background1 = createSprite(0,0,600,600)
  background1.addImage("background",backgroundImg2)
  background1.scale = 1.6;
  
  background2 = createSprite(0,0,600,600)
  background2.addImage("background",backgroundImg3)
  background2.scale = 1.6;
background2.visible=false;

background3 = createSprite(0,0,600,600)
  background3.addImage("background",backgroundImg8)
  background3.scale = 1.6;
background3.visible=false;

background4 = createSprite(0,0,600,600)
background4.addImage("background",backgroundImg5)
background4.scale = 1.6;
background4.visible=false;

background5 = createSprite(0,0,600,600)
background5.addImage("background",backgroundImg6)
background5.scale = 1.6;
background5.visible=false;                        

background6 = createSprite(0,0,600,600)
background6.addImage("background",backgroundImg7)
background6.scale = 1.6;
background6.visible=false;

  Thalleous = createSprite(100,50,20,50);
  Thalleous.addAnimation("running", Thalleous_running);
  Thalleous.addAnimation("SwordR", Thalleous_Sword);
  Thalleous.addAnimation("Jumping",Thalleous_jump);
  Thalleous.addAnimation("SJumping",Thalleous_SwordJ)
 Thalleous.addAnimation("Protect",Thalleous_Protect)
 Thalleous.addAnimation("Die",Thalleous_die) 
 Thalleous.addAnimation("Stand",Thalleous_Stand)
 Thalleous.scale=0.4
  Thalleous.setCollider("circle",0,0,300);
  Thalleous.debug=false;


  ground = createSprite(200,510,2900,20);
  ground.shapeColor="Brown"
  ground.x = ground.width /4;


portal=createSprite(900,350,10,10);
portal.addImage(portalImg);
portal.visible=false;

DeathSinger=createSprite(800,420,10,10);
DeathSinger.addAnimation("DS",DeathSinger_S);
DeathSinger.addAnimation("DS2",deathSinger_Come);
DeathSinger.visible=false;
DeathSinger.scale=0.5;
Talk1=createSprite(170,50,10,10);
Talk1.addImage(Talk1Img);
Talk1.scale=0.5;
Talk1.visible=false;
Talk2=createSprite(570,50,10,10);
Talk2.addImage(Talk2Img);
Talk2.scale=0.5;
Talk2.visible=false;
Talk3=createSprite(170,50,10,10);
Talk3.addImage(Talk3Img);
Talk3.scale=0.5;
Talk3.visible=false;
Talk4=createSprite(570,50,10,10);
Talk4.addImage(Talk4Img);
Talk4.scale=0.5;
Talk4.visible=false;

  gameOver = createSprite(500,100);
  gameOver.addImage(gameOverImg);
  gameOver.visible=false;
  restart = createSprite(500,280);
  restart.addImage(restartImg);
  restart.visble=false;
 play1=createSprite(80,50,2900,10)
play1.addImage(PlayImg);
play1.visible=false
play1.scale=0.2
play2=createSprite(80,50,2900,10)
play2.addImage(PlayImg2);
play2.visible=false
play2.scale=0.2
Play3=createSprite(80,50,2900,10)
Play3.addImage(PlayImg3);
Play3.visible=false
Play3.scale=0.2
Play4=createSprite(80,50,2900,10)
Play4.addImage(PlayImg4);
Play4.visible=false
Play4.scale=0.2


tbc1=createSprite(550,320,1,1)
tbc1.addImage(TbcImg);
tbc1.scale=1.6;
tbc1.visible=false;

endc=createSprite(550,255,1,1);
endc.addImage(EndingImg);
endc.scale=0.9
endc.visible=false;

SoP=createSprite(280,50,2900,10)
SoP.addImage(SoImg);
SoP.visible=false
SoP.scale=0.3
note1=createSprite(350,50,2900,10)
note1.addImage(note1Img);
note1.visible=false
note1.scale=0.3
note2=createSprite(350,50,2900,10)
note2.addImage(note2Img);
note2.visible=false
note2.scale=0.3
  gameOver.scale = 0.7;
 restart.scale = 0.9;
  
  invisibleGround = createSprite(200,530,2500,20);
  invisibleGround.visible = false;
  invisibleGround1 = createSprite(200,540,2500,20);
  invisibleGround1.visible = false;
  invisibleGround2 = createSprite(200,590,2500,20);
  invisibleGround2.visible = false;
 


  //Create Tree group
TreesGroup = createGroup();
TreesGroup2 = createGroup();
  SwordGroup=createGroup();
  VoltarisGroup=createGroup();
 spearGroup=createGroup();
  songsGroup=createGroup();
GrimGroup=createGroup();
VoltarisGroup2=createGroup();

  score = 0;
  
}

function draw() {
  background1.velocityX=-3;
  background2.velocityX=-3;
  background3.velocityX=-3;
  background4.velocityX=-3;
  background5.velocityX=-3;
  background6.velocityX=-3;
  
  
  //console.log(bac kground.x);
 background(backgroundImg4)
 fill(255,255,255)
 textSize(32)
 background1.depth = background1.depth;
 score.depth = background1.depth + 1;
   text("Score: "+ score, 920,30);
console.log(gameState)
   if (gameState===START){
    Thalleous.visible=false;
     background1.visible=false;
     fill(11, 32, 147)
     textSize(40);
text("Hello Everyone,",50,40);
text("This is a game based on Songs Of War Series ",50,80);
text("An Ardoni name Thalleous Sendaris War protecting",50,120);
text("Songs from Voltaris because if voltaris get the Songs.",50,160)
text("He will the escape DeathSinger and he will destroy the ",50,200);
text("World, The Volatris and DeathSinger and his clan are ",50,240);
text("Ingreases .The Ingreases are bad and want to destroy the",50,280);
text("World. You Want to know about What are Songs",50,320);
text("Songs are those things that are very powerful and it ",50,360);
text("have many powers like super speed or invisiblity, So lets",50,400)
text("help thalleous to protect the Songs .",50,440)
fill(255)
text("reach at 1600 score see what happen  .",50,480)
push()
textSize(40);
fill(247, 34, 34)
text("Press S key to Play",690,440)
pop();
restart.visible=false;
if(keyDown("s")|| keyDown("S")){
  gameState=PLAY;
  background1.visible=true;
   Thalleous.visible=true;
  
 // TreesGroup.visible=false;
 // TreesGroup2.visible=false;
 // SwordGroup.visible=false;
 
}




   }



    if(gameState=== PLAY){
      play1.visible=true;
      if (background1.x<0) {
        background1.x=background1.width/2;
    }
    ground.velocityX = -(4 + 3* score/100)
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }

    //jump when the space key is pressed
    if(keyDown("space")&& Thalleous.y >= 300) {
      Thalleous.velocityY = -20;
      Thalleous.changeAnimation("Jumping",Thalleous_jump)
      jumpSound.play();
  }

 //scoring
 score = score + Math.round(getFrameRate()/60);
    
  if(Thalleous.isTouching(invisibleGround)){
    Thalleous.changeAnimation("running",Thalleous_running)
   
  }
    
    //add gravity
    Thalleous.velocityY = Thalleous.velocityY + 0.8
    //Stop Thalleous from falling down
  
   //spawn the Tress
   spawnTrees();
   spawnTrees2();

   GrimF();
   Swords();
   spawnSpears();
  VoltarisG();
  SongsF();
  VoltarisG2();
   if(SwordGroup.isTouching(Thalleous)|| Thalleous.isTouching(invisibleGround2)){
    Thalleous.changeAnimation("SwordR",Thalleous_Sword)   
  
   
     //displaying score
  
   
    Thalleous.setCollider("circle",0,0,240);
    SwordGroup.destroyEach();
  invisibleGround.position.y=5000;   
  invisibleGround1.position.y=530;
  invisibleGround2.position.y=500;
   }
   if(score>380){
    play1.visible=false;
    play2.visible=true;
    note1.visible=true;
   if(keyDown("A")||keyDown("a")){
 
     Thalleous.changeAnimation("SJumping",Thalleous_SwordJ)
     if(keyDown("A")&&Thalleous.isTouching(VoltarisGroup)||keyDown("a")&&Thalleous.isTouching(VoltarisGroup)){
      Thalleous.changeAnimation("SJumping",Thalleous_SwordJ);
      VolS.play();
      VoltarisGroup.destroyEach();
    } 
    if(keyDown("A")&&Thalleous.isTouching(VoltarisGroup2)||keyDown("a")&&Thalleous.isTouching(VoltarisGroup2)){
      Thalleous.changeAnimation("SJumping",Thalleous_SwordJ);
      VolS.play();
      VoltarisGroup2.destroyEach();
    } 
    
    }
      else{
        Thalleous.position.x=100;
       }
      }
 
      if(score>440){
        play1.visible=false;
        Play3.visible=true;
        note2.visible=true;
        note1.visible=false;
        if(keyDown("P")|| keyDown("p")){
          Thalleous.changeAnimation("Protect",Thalleous_Protect); 
        }
            if(keyDown("P")&&Thalleous.isTouching(spearGroup)||keyDown("p")&&Thalleous.isTouching(spearGroup)){
              Thalleous.changeAnimation("Protect",Thalleous_Protect);
              SpearS.play();
              spearGroup.destroyEach();
            }
           
          } 


if(score>950){
  Play3.visible=false;
  Play4.visible=true;
  play1.visible=false;
  SoP.visible=true;
  note2.visible=false;
 
  if(keyDown("X")||keyDown("x")){
    GrimGroup.destroyEach();
    VoltarisGroup.destroyEach();
    VoltarisGroup.destroyEach();
    spearGroup.destroyEach();
  }
}




if(score>300){
  background2.visible=true;
  background1.visible=false;
  background3.visible=false;
  background4.visible=false;
  background5.visible=false;
  background6.visible=false;
}
if (background2.x<0) {
  background2.x=background2.width/2;
}


if(score>600){
  background3.visible=true;
  background1.visible=false;
  background2.visible=false;
  background4.visible=false;
  background5.visible=false;
  background6.visible=false;
}
if (background3.x<0) {
  background3.x=background3.width/2;
}

if(score>900){
  background4.visible=true;
  background3.visible=false;
  background1.visible=false;
  background2.visible=false;
  background5.visible=false;
  background6.visible=false;
}
if (background4.x<0) {
  background4.x=background4.width/2;
}

gameOver.visible=false
restart.visible=false;

if(score>1200){
  background5.visible=true;
  background4.visible=false;
  background3.visible=false;
  background1.visible=false;
  background2.visible=false;
  background6.visible=false;
}
if (background5.x<0) {
  background5.x=background5.width/2;
}

if(score>1500){
  background6.visible=true;
  background5.visible=false;
  background4.visible=false;
  background3.visible=false;
  background1.visible=false;
  background2.visible=false;
}
if (background6.x<0) {
  background6.x=background6.width/2;
}

if(score>1600){
  background6.velocityX=0;
  VoltarisGroup2.destroyEach();
  VoltarisGroup.destroyEach();
  SwordGroup.destroyEach();
  GrimGroup.destroyEach();
  spearGroup.destroyEach();
  portal.visible=true;
  TreesGroup.setVelocityXEach(0)
  TreesGroup2.setVelocityXEach(0)
Play4.visible=false;
SoP.visible=false;
Play3.visible=false
play1.visible=false;
play2.visible=false;
}

if(score>1650){
 Thalleous.changeAnimation("Stand",Thalleous_Stand);
  portal.visible=true;
  DeathSinger.visible=true;
  Talk1.visible=true;
  TreesGroup2.destroyEach();
  TreesGroup.destroyEach();
}
  
   
if(score>1680){
  Talk1.visible=false;
  TreesGroup.destroyEach();
  TreesGroup2.destroyEach();
  Talk2.visible=true;
}
 
if(score>1740){
  Talk2.visible=false;
  Talk3.visible=true;
  TreesGroup.destroyEach();
TreesGroup2.destroyEach();
}

if(score>1760){
  Talk3.visible=false;
  Talk4.visible=true;
  TreesGroup.destroyEach();
TreesGroup2.destroyEach();
}


  
    if(songsGroup.isTouching(Thalleous)){
      songsGroup.destroyEach();
    }
   
}

Thalleous.collide(invisibleGround);
  Thalleous.collide(invisibleGround1);


  if(score>1790&& score<1810){
    TreesGroup.destroyEach();
TreesGroup2.destroyEach();
    Thalleous.changeAnimation("SJumping",Thalleous_SwordJ)
    Thalleous.position.x=300;
    Thalleous.position.y=150;
    DeathSinger.changeAnimation("DS2",deathSinger_Come);
   thunder.play();
  }
if(score>1811){
  tbc1.visible=true;
  Thalleous.visible=false;
TreesGroup.destroyEach();
TreesGroup2.destroyEach();
songsGroup.destroyEach();
ground.visible=false
}
if(gameState>1840){
 
  tbc1.visble=false;
  endc.visible=true;
}


  

  
   if(VoltarisGroup.isTouching(Thalleous)||spearGroup.isTouching(Thalleous)||GrimGroup.isTouching(Thalleous)||VoltarisGroup2.isTouching(Thalleous)){
      Thalleous.changeAnimation("Die",Thalleous_die)
    die.play();
       gameState = END;
    }
  
   else if (gameState === END) {
     gameOver.visible = true;
     restart.visible = true;
     
      ground.velocityX = 0;
      Thalleous.velocityY = 0
      background1.velocityX=0
      background2.velocityX=0
      background3.velocityX=0
      background4.velocityX=0
      background5.velocityX=0
      background6.velocityX=0
      //set lifetime of the game objects so that they are never destroyed
    VoltarisGroup.setLifetimeEach(-1);
    TreesGroup.setLifetimeEach(-1);
    VoltarisGroup2.setLifetimeEach(-1);
    TreesGroup2.setLifetimeEach(-1);
    spearGroup.setLifetimeEach(-1);
     songsGroup.setLifetimeEach(-1);
    SwordGroup.setLifetimeEach(-1);
    GrimGroup.setLifetimeEach(-1);
    SwordGroup.setVelocityXEach(0);
     spearGroup.setVelocityXEach(0);
      songsGroup.setVelocityXEach(0);
     VoltarisGroup2.setVelocityXEach(0);   
     VoltarisGroup.setVelocityXEach(0);
     GrimGroup.setVelocityXEach(0);   
     TreesGroup.setVelocityXEach(0);
     TreesGroup2.setVelocityXEach(0);   
     if(mousePressedOver(restart)) {
      reset();
    }
   }
  
 
  


  drawSprites();
  }

function reset(){
  gameState=PLAY;
  VoltarisGroup.destroyEach();
  spearGroup.destroyEach();
  VoltarisGroup2.destroyEach();
  TreesGroup.destroyEach();
  TreesGroup2.destroyEach();
  SwordGroup.destroyEach();
  GrimGroup.destroyEach();
    songsGroup.destroyEach();
  Thalleous.changeAnimation("running", Thalleous_running);
  score=0;
}


function spawnSpears(){
 if (frameCount % 600 === 0){
   var spear = createSprite(1400,540,10,40);
   spear.velocityX = -(6 + score/100);
   spear.y = Math.round(random(405,405));
   spear.addImage(spearImg)
    //assign scale and lifetime to the spear    
    spear.scale = 0.15;
    spear.lifetime = 1100;
    spear.setCollider("rectangle",0,0,10,40);
    spear.debug=false;
   //add each spear to the group
    spearGroup.add(spear);
 }
}

function spawnTrees() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var Tree = createSprite(1400,120,40,10);
    Tree.y = Math.round(random(390,390));
    Tree.scale = 0.3;
    Tree.velocityX = -3;
    
 //generate random obstacles
 var rand = Math.round(random(1,2));
 switch(rand) {
 
   case 1: Tree.addImage(Tree2);
           break;
   case 2: Tree.addImage(Tree3);
           break;
   default: break;
 }

     //assign lifetime to the variable
    Tree.lifetime = 1400;
    
    //adjust the depth
    Tree.depth = Tree.depth;
    Thalleous.depth = Tree.depth + 1;
    Tree.depth = Tree.depth;
    ground.depth = Tree.depth + 1;
    TreesGroup.add(Tree);
  }
}


function spawnTrees2() {
  
  if (frameCount % 110 === 0) {
    var TreeG = createSprite(1400,10,40,10);
    TreeG.y = Math.round(random(440,440));
    TreeG.scale = 0.4;
    TreeG.velocityX = -3;
    
   TreeG.addImage(Tree1)

     //assign lifetime to the variable
    TreeG.lifetime = 1400;
    
    //adjust the depth
    TreeG.depth = TreeG.depth;
    Thalleous.depth = TreeG.depth + 1;
    TreeG.depth = TreeG.depth;
    ground.depth = TreeG.depth + 1;
    TreesGroup2.add(TreeG);
  }
}

function Swords(){
  if (frameCount % 850 === 0) {
    var Sword = createSprite(1400,10,40,10);
    Sword.y = Math.round(random(380,380));
    Sword.addImage(SwordImg)
    Sword.scale = 3;
    Sword.velocityX = -3;
    
     //assign lifetime to the variable
    Sword.lifetime = 1100;
    SwordGroup.add(Sword);
  }

}


function  VoltarisG(){
  if (frameCount % 450 === 0) {
     Voltaris = createSprite(1400,10,40,10);
    Voltaris.addAnimation("attack",Voltaris_attack)
    Voltaris.y = Math.round(random(420,420));
   
    Voltaris.scale = 0.46;
    Voltaris.velocityX = -7;
    Voltaris.setCollider("circle",-20,0,100);
    Voltaris.debug=false;
   

    //assign lifetime to the variable
    Voltaris.lifetime = 1100;
    VoltarisGroup.add(Voltaris);
  }

}
function SongsF(){
  if (frameCount % 2100 === 0) {
    var Songs = createSprite(1400,120,40,10);
    Songs.y = Math.round(random(400,400));
    Songs.scale = 0.15;
    Songs.velocityX = -3;
    
 //generate random obstacles
 var rand = Math.round(random(1,4));
 switch(rand) {
 
   case 1: Songs.addImage(P1);
           break;
   case 2: Songs.addImage(P2);
           break;
   case 3: Songs.addImage(P3);
           break;
   default: break;
 }

     //assign lifetime to the variable
    Songs.lifetime = 1400;
    
    
    songsGroup.add(Songs);
  }
}

function GrimF(){
  if (frameCount % 1100 === 0) {
    Grim = createSprite(1400,10,40,10);
   Grim.addAnimation("Rolling",GrimS)
   Grim.y = Math.round(random(420,420));
  
   Grim.scale = 0.18;
    Grim.velocityX = -6;
  Grim.setCollider("circle",0,0,160);
   Grim.debug=false;
  

   //assign lifetime to the variable
   Grim.lifetime = 1100;
   GrimGroup.add(Grim);
 }



}

function  VoltarisG2(){
  if (frameCount % 1800 === 0) {
     Voltaris2 = createSprite(1400,10,40,10);
    Voltaris2.addAnimation("attack2",Voltaris_attack2)
    Voltaris2.y = Math.round(random(420,420));
   
    Voltaris2.scale = 0.46;
    Voltaris2.velocityX = -7;
    Voltaris2.setCollider("circle",-20,0,100);
    Voltaris2.debug=false;
   

    //assign lifetime to the variable
    Voltaris2.lifetime = 1100;
    VoltarisGroup2.add(Voltaris2);
  }

}
