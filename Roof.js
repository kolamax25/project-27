class Roof{
    
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
    
    
    display(){
        var ballpos =this.body.position;
        
        push();
        translate(ballpos.x, ballpos.y);
        strokeWeight(4);
        stroke("brown")
        fill("brown")
        rectMode(CENTER)
        rect(0 , 0, this.width, this.height)
        
        pop();
      }



}