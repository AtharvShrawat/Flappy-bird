var backgroundImg, back, bird, birdImg, topPole,topPoleImg,bottomPole,bottomPoleImg,score


function preload() {
  backgroundImg = loadImage("Background.png")
  birdImg = loadImage("Bird.png")
  topPoleImg = loadImage("Top Pole.png")
  bottomPoleImg = loadImage('Bottom Pole.png')
}

function setup() {
  createCanvas(800,800);
  back = createSprite(400,400)
  back.addImage(backgroundImg)
  back.scale = 2
  bird = createSprite(100,300,50,50)
  bird.addImage(birdImg)
  bird.scale = 0.2
  //poles = createSprite(300,100,20,50)
  //poles.addImage(polesImg)
  score = 0
}

function draw() 
{
   background(30);
   score = Math.round(frameCount/40)
  if(keyDown("space")) {
    bird.velocityY = -10
  }
  back.velocityX = -1
  if(back.x < 400) {
    back.x = back.x + width/2
  }

  bird.velocityY = bird.velocityY+1 
  spawnTopPoles()
  spawnBottomPoles()
  drawSprites();
  textSize(20) 
  fill("blue")
  text("Score: "+score,700,20)

  

}



function spawnTopPoles() {
  if(frameCount%70 === 0) {
    topPole = createSprite(800,10,20,50)
    topPole.addImage(topPoleImg)
    topPole.scale = 0.4
    topPole.velocityX = -5
   
  }
}

function spawnBottomPoles() {
  if(frameCount%70  === 0) {
    bottomPole = createSprite(800,780,20,50)
    bottomPole.addImage(bottomPoleImg)
    bottomPole.scale = 0.9
    bottomPole.velocityX = -5  
  }
}