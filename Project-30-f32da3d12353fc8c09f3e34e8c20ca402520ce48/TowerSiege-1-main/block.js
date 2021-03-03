class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    //  this.image = loadImage("sprites/wood1.png");//no need of this
    // initialize this.v=255
    }
  
   display(){
   this.v=255
   if(this.body.speed >3){
     this.v= this.v-5// this should be along with tint, as it is used to reduce the visibility
   }
   
    tint (255,this.v)
    //write the image instruction here, so that the tint will be applied
   }
  
  };
  