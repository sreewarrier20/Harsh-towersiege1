class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        
        
    }

    fly(){
        this.sling.bodyA = null;
    }
    }

    display();{
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#301608")
            line(pointA.x-15, pointA.y+10 ,pointB.x-65, pointB.y+65);
            line(pointA.x-15, pointA.y+10 ,pointB.x, pointB.y+78);
        
    }
    
}