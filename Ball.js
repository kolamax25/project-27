class Ball{
    constructor(x, y, r) {
      var options = {
          
          'restitution': 1,
          'friction':10,
          'density' : 0.8
          
      }
     
      this.x=x;
      this.y=y;
      this.r= r
      this.body = Bodies.circle(x, y, r, options);
      
      World.add(world, this.body);
    }
    display(){
      var ballpos =this.body.position;
      
      push();
      translate(ballpos.x, ballpos.y);
      strokeWeight(4);
      stroke("pink")
      fill("pink")     
      ellipseMode(RADIUS)
      ellipse(0 , 0, this.r, this.r)
      
      pop();
    }
    
    
    
}
  
