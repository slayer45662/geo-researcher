class Iron {
    constructor(x,y,) {
      var options = {
          isStatic: false,
          density:2
      }
      this.body = Bodies.rectangle(x,y,10,10,options);
      this.width = 10;
      this.height = 10;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };