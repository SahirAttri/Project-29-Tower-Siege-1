class Block1{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.01,
          'density':0.001
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();

      var pos =this.body.position;
      rectMode(CENTER);
      fill(rgb(142,0,144));
      rect(pos.x, pos.y, this.width, this.height);
      
      pop();
    }
}