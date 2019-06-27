class Enemy {
  constructor(img, x, y, speed, width, height) {
    this.image = img;
    this.posX = x;
    this.posY = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
  }

  move() {
    this.posX = this.posX - this.speed;
  }

  render() {
    this.move();
    image(this.image, this.posX, this.posY, this.width, this.height);
  }
}