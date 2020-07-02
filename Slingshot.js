class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
                
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
           
            if(pointA.x<220){
                strokeWeight(15);
            stroke("#301608");
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x-10, pointB.y);
            image(this.sling3,pointA.x-18,pointA.y-5,15,30);
            }
            else{
                strokeWeight(8);
                stroke("#301608");
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x-10, pointB.y);
            image(this.sling3,pointA.x-18,pointA.y-5,15,30);
            }
            pop();
        }
    }
    
}