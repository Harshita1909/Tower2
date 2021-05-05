class Block
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.5,
            friction:1		
			}
		//this.x=x;
		//this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
        this.visibility=225;
 		World.add(world, this.body);

	}
	display()
	{
			var BlockPos=this.body.position;
            if(this.body.speed<3){

            		
			push()
			translate(BlockPos.x, BlockPos.y);
            
			rectMode(CENTER)
			strokeWeight(4);
            stroke("black");
			fill("blue")
			rect(0,0,this.w, this.h);
			pop()
            }
        else{
            World.remove(world,this.body)
            push()
           this.visibility=this.visibility-5
           tint(255,this.visibility)
           pop();
        }
	}

}