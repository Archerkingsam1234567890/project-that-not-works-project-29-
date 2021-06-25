class Base {
   constructor(x,y,w,h) {
      var options={
         isStatic: true
      }

    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    
    World.add(world,this.body);
    

   } 

   display() {
      
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rect(pos.x,pos.y, this.w, this.h);
      pop();


   }
}