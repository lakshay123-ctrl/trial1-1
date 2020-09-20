class Ball {
    constructor(x,y,radius) {
      var options = {
          'restitution':0.8,
            'density':1.0,
          
      }
      this.body = Bodies.circle(200,650,10);
      this.radius = radius;
      this.x = x;
      this.y = y;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate (angle);
      ellipseMode(RADIUS);
      fill ("red");
      ellipse(ball.pos.x,ball.pos.y,10,10);
  
      pop();
    }
  }
  