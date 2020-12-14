//Create variables here
var Hungrydog, dog1
var HappyDog,dog2;
var database
var  foodS, foodStock
function preload()
{
  dog1 = loadImage("dogImg.png");
  dog2 = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  HappyDog = createSprite(200,200,120,120);
  HappyDog.addImage(dog2);
 foodStock = database.ref('Food');
 foodStock.on("value",readStock)
}


function draw() {  
   background(46, 139, 87);
 
  drawSprites();
  textSize(30)
  fill(123,123,211)
  text("Plese click up arrow. I am Hungry:[",200,25);
  //add styles here

}

function end(){
  if (keywentDown (UP_ARROW) ) {
    writeStock(foods) ;
    dog.addImage (dogHappyd) ;
    textSize(25);
    fill("black");
    text("THANK YOU SO MUCH:)")
   }    


}
//Function to read values from DB
function readStock(data) {
  foodS=data. val();
}
  //Function to write values in DB
  function writeStock(x) {
  database. ref('/') . update({
  Food :x
  })  
  }

