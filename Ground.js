class Ground{
    constructor(x,y,width,height)
    {
        var ground_options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(200,390,200,20,ground_options);
       this,width=width;
       this.height=height;
       World.add(world,this.body);
    
    }
     display(){
        var pos=this.body.position
        rectMode(CENTER);
        fill("blue")
        rect(pos.x,pos.y,this.width,this.height);
        
     }


}