class Paper {
constructor(x, y, r){
var options = {
isStatic: false, 
restitution: 0.3,
friction: 0,
density: 1.2, 
}
this.r=r;
this.x=x;
this.y=y;
this.image = loadImage("paper.png");
this.body= Bodies.circle(x, y, r, options)
World.add(world, this.body)
}
display(){
    var p = this.body.position;
    push();
    translate(p.x, p.y)
    imageMode(RADIUS)
  image(this.image,0, 0, this.r, this.r)
  pop();
  }
}