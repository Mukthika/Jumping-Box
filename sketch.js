var canvas;
var music;
var blue,pink,red,purple;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
      blue = createSprite(100,590,180,20);
      blue.shapeColor = "blue";

      pink = createSprite(300,590,180,20);
      pink.shapeColor = "pink";

      red = createSprite(500,590,180,20);
      red.shapeColor = "red";

      purple = createSprite(700,590,180,20);
      purple.shapeColor = "purple";

    //create box sprite
    box = createSprite(random(20,750),100,20,20);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 7;

}

function draw() {
    background(rgb(10,10,10));

    //Creatwe EdgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
     if(blue.isTouching(box) && box.bounceOff(blue)){
       music.stop()
       box.shapeColor= "blue";
     }
    
     if(purple.isTouching(box)){
        music.stop();
        box.shapeColor= "purple";
        box.velocityX = 0;
        box.velocityY = 0;
      }
 
      if(pink.isTouching(box) && box.bounceOff(pink)){
        box.shapeColor= "pink";
        music.play()
      }
 
      if(red.isTouching(box) && box.bounceOff(red)){
        box.shapeColor= "red";
        music.play()
      }
 

   drawSprites();
}

