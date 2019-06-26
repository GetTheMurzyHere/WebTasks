class Enemy {
  constructor(img) {
    this.image = img;
    this.posX = 950;
    this.posY = random(40, 250);
    this.stay = true;
    this.speed;
    this.velocity = random(0.02);
  }

  move() {
    switch (level) {
      case 1:
        this.speed = 1.5;
        break;
      case 2:
        this.speed = 2.5;
        break;
      case 3:
        this.speed = 3.2;
        break;
      case 4:
        this.speed = 2.5;
    }
    this.posX = this.posX - this.speed;
  }
}