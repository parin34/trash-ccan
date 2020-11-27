class Ball{
    constructor(x,y,r){

        var options={
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:0.3

        }
        
        this.image=loadImage("images/paper.png");
        this.r =r;
        this.body= Bodies.circle(x,y,r,options);
        World.add(world,this.body);


    }
    display(){

        var pos = this.body.position;
        push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			
            fill(255,0,255)
            imageMode(CENTER);
			image(this.image,0,0,this.r, this.r);
			pop()
       
//

    }







}