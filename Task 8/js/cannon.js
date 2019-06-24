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

  reload() {
    this.timeToReload = 1.5;
    var self = this;
    this.reloadInterval = setInterval(() => {
      self.timeToReload -= 0.005;
    }, 5);
  }

  shoot(){
    if (this.timeToReload <= 0) {

      if(this.reloadInterval !== null) {
         clearInterval(this.reloadInterval);
}
      console.log(this.timeToReload);

      let normalizeX = (mouseX - 30) / cannon.width / 2;
      let normalizeY = (mouseY - 485) / cannon.width / 2;

      let shot = new Cannonball(klevchImg, 110, klevchImg.width / 10, this.angle, normalizeX, normalizeY);
      shots.push(shot);
      this.reload();
    }
  }
}