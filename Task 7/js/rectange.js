function Rectangle(x, y, direction) {
    Figure.apply(this, [x, y, direction]);
    this.height = random(5, 70);
    this.width = random(5, 70);
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
      rect(this.posX, this.posY, this.width, this.height)
    }
}