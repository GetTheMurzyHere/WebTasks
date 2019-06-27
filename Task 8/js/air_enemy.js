class AirEnemy extends Enemy {
  constructor(img, x, y, speed, width, height) {
    super(img, x, y, speed, width, height);
    this.stay = true;
  }
}