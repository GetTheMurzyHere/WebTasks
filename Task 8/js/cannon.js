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
      shootSound.play();
      if (this.reloadInterval !== null) {
        clearInterval(this.reloadInterval);
      }

      let startX = cannon.width / 2 * Math.cos(this.angle);
      let startY = -(cannon.width / 2 * Math.sin(this.angle));

      let time;
      let shot;
      let shot2;
      let shot3;

      switch (level) {
        case 1:
          shot = new Cannonball(shotImg, 100, shotImg.width / 10, this.angle, startX, startY);
          shots.push(shot);
          time = 1.5;
          break;
        case 2 || 3:
          shot = new Cannonball(shotImg, 100, shotImg.width / 10, this.angle, startX, startY);
          shots.push(shot);
          time = 1;
          break;
        case 3:
          shot = new Cannonball(shotImg, 100, shotImg.width / 10, this.angle, startX, startY);
          shot2 = new Cannonball(shotImg, 75, shotImg.width / 10, this.angle, startX, startY);
          shots.push(shot);
          shots.push(shot2)
          time = 0.8;
          break;
        case 4:
          shot = new Cannonball(shotImg, 100, shotImg.width / 10, this.angle, startX, startY);
          shot2 = new Cannonball(shotImg, 85, shotImg.width / 10, this.angle, startX, startY);
          shot3 = new Cannonball(shotImg, 75, shotImg.width / 10, this.angle, startX, startY);
          shots.push(shot);
          shots.push(shot2);
          shots.push(shot3)
          time = 0.7;
          break;
      }
      this.reload(time);
    }
  }
}