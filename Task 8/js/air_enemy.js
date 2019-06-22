class AirEnemy extends Enemy {
  constructor(img, diameter) {
    super(img);
    this.diameter = diameter;
  }

  render = () => {
    super.move();
    image(this.image, this.posX, this.posY, this.diameter, this.diameter);
  }
}