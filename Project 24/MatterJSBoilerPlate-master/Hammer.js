class Hammer {
constructor(x, y, width, height) {
var options = {
'density': 2,
'friction': 1,
'restitution': 0.5
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world, this.body);
}
display(){
var p = this.body.position;
push();
translate(p.x, p.y);
rectMode(CENTER);
strokeWeight(4);
stroke("white");
fill("yellow");
rect(0, 0, this.width, this.height);
pop();
}
};