class Cannonball {
  constructor(img, speed, diameter, angle, x, y) {
    this.image = img;
    this.diameter = diameter;
    this.speed = speed;
    this.time = 0;
    this.startX = x;
    this.startY = y;
    this.posX = 0;
    this.posY = 0;
    this.angle = angle;
    this.stay = true;
  }

  move = () => {
    this.posX = this.speed * this.time * Math.cos(this.angle);
    this.posY = this.posX * Math.tan(this.angle) + ((9.8 * this.posX * this.posX) / (2 * this.speed * this.speed * Math.cos(this.angle) * Math.cos(this.angle)));
    this.time += 0.125;
  }

  render = () => {
    this.move();
    push();
    translate(30 + this.startX * cannon.width / 2, 485 + this.startY * cannon.width / 2);
    image(this.image, this.posX, this.posY, this.diameter, this.diameter);
    pop();
  }
}