class Boss {
  constructor(img) {
    this.image = img;
    this.posX = 1200;
    this.posY = 250;
    this.diameter = klevchImg.width / 1.1;
    this.speed = 0.8;
  }

  move() {
    this.posX = this.posX - this.speed;
  }

  render() {
    if (this.posX >= 700) {
      this.move();
    }
    image(this.image, this.posX, this.posY, this.diameter, this.diameter)
  }
}