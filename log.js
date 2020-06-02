class Log{

    constructor(x,y,height,angle){
        var options={
            "restitution":0.3,
            "friction":1.3,
            "density":1.0
        }
        this.log = Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.log,angle);

        World.add(world,this.log);
    }
    display(){
        var pos = this.log.position;
        var angle = this.log.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
       
    }
}