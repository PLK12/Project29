class Stone
{
    constructor(x,y,w,h, color)
    {
        var options = 
        {
            restitution: 0.8,
        }

        this.body = Bodies.rectangle(x,y,w,h, options)
        this.w = w;
        this.h = h;

       this.color = color;
        World.add(myWorld, this.body);


    }

    display()
    {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.w, this.h);
        pop();
    }
}