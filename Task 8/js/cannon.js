class Cannon {
  constructor(img, width, height) {
    this.image = img;
    this.x = 30;
    this.y = 485;
    this.width = width;
    this.height = height;
    this.angle;
  }

  move = () => {
    if (mouseX < 30) {
      rotate(3 * PI / 2);
      image(this.image, 0, 0, this.width, this.height);
      this.angle = 3 * PI / 2;
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
  
  shoot = () => {
    let shot = new Cannonball(klevchImg, 100, klevchImg.height / 10);
    shots.push(shot);
    shots.forEach((shot) => {
      shot.move(this.angle, this);
    })
  }
}