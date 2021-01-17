class Chain{
    constructor(bodyA, bodyB, offSetX){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
         pointB: {x : offSetX, y: 0} 
        
           
        }
        this.offSetX = offSetX;
        this.sling = Constraint.create(options);
        
        World.add(world, this.sling);
    }

    display(){
        
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(8);
        stroke("white")
        line(pointA.x, pointA.y, pointB.x+this.offSetX, pointB.y);

        
        }
}

    
    
