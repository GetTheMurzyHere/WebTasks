function Pacman(x, y, direction) {
  Figure.apply(this, [x, y, direction]);
  this.radius = random(5, 70);
  this.render = () => {
    fill(this.color.r, this.color.g, this.color.b);
    this.radius = this.radius + GROWTH_RATE;
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
      case 5:
        this.moveRandom();
        break;
    }
    arc(this.posX, this.posY, this.radius, this.radius, 0.5, PI + HALF_PI + QUARTER_PI);
  }
}