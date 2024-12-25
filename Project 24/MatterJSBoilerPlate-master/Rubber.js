class Rubber {
constructor(x, y, radius){
var options = {
restitution: 0.3,
friction: 5,
density: 1
}
this.body = Matter.Bodies.circle(x, y, radius, [options]);
World.add(world, this.body)
}
display(){
    var p = this.body.position;
    var angle = this.body.angle;
    p.x = mouseX;
    p.y = mouseY;
    push();
    translate(p.x, p.y)
    rotate(angle);
    stokeWeight(4)
    stroke(white);
    fill("blue");
    pop();
}
}
