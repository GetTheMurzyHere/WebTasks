function Ball(x, y, direction) {
  Figure.apply(this, [x, y, direction]);
  this.radius = random(5, 70);
  this.render = () => {
    fill(this.color.r, this.color.g, this.color.b);
    
    switch (this.direction) {
        case 1:
            this.moveUp()
            break;
        case 2:
            this.moveDown()
            break;
        case 3:
            this.moveLeft()
            break;
        case 4:
            this.moveRight()
            break;
        case 'RANDOM', 5:
            this.moveRandom();
            break;
        case 'CHAOS', 6:
            break;
    }
    circle(this.posX, this.posY, this.radius);
  }
}