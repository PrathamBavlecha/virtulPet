var dog,sadDog,happyDog;
var feed,add;
var foodObj;
var foodStock;
var database = firebase.database()


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy_dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food()

  feed = createButton("Feed the Dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
}

function draw() {
  background(46,139,87);

  foodObj.display()

  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog)
 if(foodObj.getFoodStock()<=0){
   foodObj.updateFoodStock(foodObj.getFoodStock()*0)
 }else{
   foodObj.updateFoodStock(foodObj.getFoodStock()-1)
 }
}

function addFoods(){
  foodStock++
  database.ref('/').update({
    food:foodStock
  })
}
