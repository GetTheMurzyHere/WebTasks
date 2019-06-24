class Enemy {
  constructor(img) {
    this.image = img;
    this.posX = 950;
    this.posY = random(40, 250);
    this.stay = true;
    this.speed = 1.5;
    this.velocity = random(0.02);
  }

  move () {
    // this.speed = this.speed + this.velocity;
    this.posX = this.posX - this.speed;
  }
}