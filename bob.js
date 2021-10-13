class bob {
    constructor(body1,body2,offsetX,offsetY){
      this.offsetX = offsetX
      this.offsetY = offsetY
      var options = {
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.rope = Constraint.create(options)
      World.add(world,this.rope)
     
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
     // console.log(this.body.position.x)
    }
  }
  