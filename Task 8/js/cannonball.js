class Cannonball {
  constructor(img, speed, radius) {
    this.image = img;
    this.radius = radius;
    this.speed = 100;
    this.time = 0;
    this.posX = 0;
    this.posY = 0;
  }

  move = (angle, cannon) => {
    const g = 9.8;
    const endTime = Math.abs(2 * this.speed * Math.sin(angle) / g);
    do {
      push();
      translate(30, 485);

      this.posX = this.speed * this.time * Math.cos(angle);
      this.posY = this.posX * Math.tan(angle) + ((g * this.posX * this.posX) / (2 * this.speed * this.speed * Math.cos(angle) * Math.cos(angle)));
      this.time += 0.1;

      background(164, 217, 224);
      image(cannon.image, 0, 0, cannon.width, cannon.height);
      image(this.image, this.posX, this.posY, this.radius + 41.6, this.radius);
      pop();
    } while ((this.posX <= WIDTH && this.posY >= -HEIGHT) || (this.time < endTime));
  }
}