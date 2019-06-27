class Boss extends Enemy {
  constructor(img, x, y, speed, width, height) {
    super(img, x, y, speed, width, height);
    this.health = 30;
  }
}