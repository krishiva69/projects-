class Stone{
constructor(x, y, width, height){
var options = {
'density': 3,
'restitution': 1,
'friction': 1
}
this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body)
}
display(){
    var p = this.body.position
    var angle = this.body.angle;
    push();
    translate(p.x, p.y);
    rotate(angle);
    rectMode(CENTER);
    fill("black")
    rect(0, 0, this.width, this.height);
    pop();
}
}