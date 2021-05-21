class Stone {
    constructor(x,y,) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,15,15,options);
      this.width = 15;
      this.height = 15;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };