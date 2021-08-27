//creating variables
var runner;
var runner_image;
var track, track_image;
var invisibleWall1, invisibleWall2;
  
function preload(){
  //pre-load images
  runner_image = loadAnimation("Runner-1.png","Runner-2.png");
  track_image = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  runner = createSprite(200,300,10,10);
  runner.addAnimation("running",runner_image);
  runner.scale = 0.05;

  track = createSprite(200,200);
  track.y=height/2;
  track.addImage(track_image);
  runner.depth = track.depth+1;

  invisibleWall1 = createSprite(445,300,200,400);
  invisibleWall1.visible = false;

  invisibleWall2 = createSprite(-3,300,140,400);
  invisibleWall2.visible = false;
}

function draw() {
  background(0);

  //controls for runner
  runner.x=mouseX;

  //runner collision with invisible walls
  runner.collide(invisibleWall1);
  runner.collide(invisibleWall2);

  //track velocity and infinite background
  track.velocityY=4;

  if(track.y > 400){
    track.y=height/2;
  }

  drawSprites()
}
