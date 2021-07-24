var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var r
var score = 0;
var balloonGroup
var arrowGroup
var blue, blueGroup
var green, greenGroup
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  
  blue_balloonImage = loadImage("blue_balloon0.png")
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);

  scene.addImage(backgroundImage);

  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  balloonGroup = new Group()
  blueGroup = new Group()
  greenGroup = new Group()
  arrowGroup = new Group()
r = Math.round(random(1,3))

}
function draw() {
 background(0);
 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    } 
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  if (World.frameCount % 100 == 0) {
    if (r == 1) {
      redBalloon()





    }
    else if (r == 2){
blueBalloon()

    }
    else if (r == 3){
      greenBalloon()
    }
    

  }
  

  
  drawSprites();

textSize(25)
fill("white")
  text("Score : "+ score,280,50)


  if (balloonGroup.isTouching(arrowGroup)){

    score=score+1
    balloonGroup.destroyEach()
    arrowGroup.destroyEach()
    
    
    }
    if (blueGroup.isTouching(arrowGroup)){
    
      score=score+1
      blueGroup.destroyEach()
      arrowGroup.destroyEach()
      
      
      }
      if (greenGroup.isTouching(arrowGroup)){
    
        score=score+1
        greenGroup.destroyEach()
        arrowGroup.destroyEach()
        
        
        }


}











// Creating  arrows for bow
 function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  
  arrow.addImage(arrowImage);
  arrow.debug=true
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  



 arrowGroup.add(arrow) 
}


function redBalloon() {
  var red = createSprite(20, Math.round(random(30,300)), 10, 10);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  

  
    











red.addImage(red_balloonImage)


balloonGroup.add(red)


}

function greenBalloon(){

  var green = createSprite(20, Math.round(random(30,300)), 10, 10);
 green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  



  green.addImage(green_balloonImage)
greenGroup.add((green))

}






function blueBalloon(){

  var blue = createSprite(20, Math.round(random(30,300)), 10, 10);
  blue.velocityX = 3;
   blue.lifetime = 150;
   blue.scale = 0.1;
   
 
 
 
   blue.addImage(blue_balloonImage)
 



blueGroup.add(blue)


}