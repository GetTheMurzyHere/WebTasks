class Cannonball {
  constructor(img, speed, radius, angle) {
    this.image = img;
    this.radius = radius;
    this.speed = speed;
    this.time = 0;
    this.posX = 0;
    this.posY = 0;
    this.angle = angle;
    this.endTime = Math.abs(2 * this.speed * Math.sin(this.angle) / 9.8);
    this.stay = true;
  }

  move = () => {
    this.posX = this.speed * this.time * Math.cos(this.angle);
    this.posY = this.posX * Math.tan(this.angle) + ((9.8 * this.posX * this.posX) / (2 * this.speed * this.speed * Math.cos(this.angle) * Math.cos(this.angle)));
    this.time += 0.1;

    image(this.image, this.posX, this.posY, this.radius + 41.6, this.radius);
  }
}