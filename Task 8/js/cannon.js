class Cannon {
  constructor(img, width, height) {
    this.image = img;
    this.posX = 0;
    this.posY = 0;
    this.width = width;
    this.height = height;
    this.angle;
    this.timeToReload = 0;
    this.reloadInterval;
  }

  move() {
    if (mouseX < 30) {
      let rads = -HALF_PI;
      rotate(rads);
      image(this.image, 0, 0, this.width, this.height);
      this.angle = rads;
      return;
    }
    if (mouseY > 485) {
      image(this.image, 0, 0, this.width, this.height);
      this.angle = 0;
      return;
    }

    let angleRad = Math.atan((mouseY - 485) / (mouseX - 30));
    rotate(angleRad);
    image(this.image, 0, 0, this.width, this.height);
    this.angle = angleRad;
  }

  render() {
    push();
    translate(30, 485);
    this.move();
    pop();
  }

  reload(time) {
    this.timeToReload = time;
    var self = this;
    this.reloadInterval = setInterval(() => {
      self.timeToReload -= 0.005;
    }, 5);
  }

  shoot() {
    if (this.timeToReload <= 0) {

      if (this.reloadInterval !== null) {
        clearInterval(this.reloadInterval);
      }

      // let distance = Math.sqrt((mouseX - 30) * (mouseX - 30) - (mouseY - 485) * (mouseY - 485));

      let normalizeX = cannon.width / 2 * Math.cos(this.angle);
      let normalizeY = -(cannon.width / 2 * Math.sin(this.angle));

      let shot = new Cannonball(klevchImg, 95, klevchImg.width / 10, this.angle, normalizeX, normalizeY);
      shots.push(shot);
      let time;
      switch (level) {
        case 1:
          time = 1.5;
          break;
        case 2 || 3:
          time = 1;
          break;
        default:
          time = 0.7;
          break;
      }
      this.reload(time);
    }
  }
}