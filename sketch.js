var dog, happyDog;
var foodS, foodStock;
var database; 
var count;

function preload()
{
  dogimg = loadImage("Dog.png");
  happyDogimg = loadImage("happydog.png");
}

function setup() {
  
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogimg);
  dog.scale = 0.25;
  database=firebase.database();   
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  count = 20;
}

function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock();
    dog.addImage(happyDogimg);
  }
  drawSprites();
  textSize = 3;
  fill("black");
  stroke(2);
  text("Food Stock : " + count,20,30);
 
}
function readStock(data){
  foodS = data.val();
}

function writeStock(){

  if(count<1){
    count=0;
  }else{
    count=count-1;
  }
  
 // database.ref('Food').update({
   // Food:x
  //})
}
