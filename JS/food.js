class Food{
    constructor(){
        var foodStock;
        this.image =  loadImage("Images/Milk.png")
    }

    getFoodStock(){
    var foodRef = database.ref('food')
     foodRef.on("value",function(data){
       foodStock = data.val()
     })
    }
    updateFoodStock(count){
      database.ref('/').update({
        food:count
    })
    }
    deductFood(){
      database.ref('/').update({
        food:foodStock-- 
    })
    }

    display(){
      var x = 80,y = 100;
      imageMode(CENTER)
      image(this.image,720,220,70,70);

      if(this.foodStock!=0){
          for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                x=80
                y=y+50;
              }
              image(this.image,x,y,50,50);
              x=x+30
          }
      }
    }
}