class Throw  {
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyB,
            pointA:pointB,
            stiffness :0.01,
            length: 10,

        }
        this.pointB=pointB ;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    
    }

    fly(){
        this.throw.bodyA=null;

    }

    launch(bodyA){
        this.throw.bodyA=bodyA;

    }


    display(){


    }
    
    }