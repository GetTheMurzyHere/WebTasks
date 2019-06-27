class GroundEnemy extends Enemy {
  constructor(img, x, y, speed, width, height) {
    super(img, x, y, speed, width, height);
    this.stay = true;
    this.health = 3;
  }
}