function Rectangle(x, y, direction) {
  Figure.apply(this, [x, y, direction]);
  this.height = random(5, 70);
  this.width = random(5, 70);
  this.diagonal;
  this.posX = this.posX - this.width / 2;
  this.posY  = this.posY - this.height / 2;
  this.render = () => {
    this.width = this.width + GROWTH_RATE;
    this.height = this.height + GROWTH_RATE;
    this.diagonal = Math.sqrt(this.width * this.width + this.height * this.height);
    fill(this.color.r, this.color.g, this.color.b);
    switch (this.direction) {
      case 1:
        this.moveUp();
        break;
      case 2:
        this.moveDown();
        break;
      case 3:
        this.moveLeft();
        break;
      case 4:
        this.moveRight();
        break;
      case 5:
        this.moveRandom();
        break;
    }
    rect(this.posX , this.posY, this.width, this.height);
  }
}