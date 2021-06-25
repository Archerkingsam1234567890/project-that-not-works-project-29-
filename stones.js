class Stone {
    constructor(x,y,) {
        var options={
            density: 0.08

        }

        this.body = Bodies.circle(x,y,r,options);
        this.x= x;
        this.y =y;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        Push();
        ellipseMode(CENTER)
        ellipse(pos.x,pos,y,r,r);
        pop();

        

}

}