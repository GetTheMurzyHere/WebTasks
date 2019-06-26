class GroundEnemy extends Enemy {
    constructor(img, width, height) {
      super(img);
      this.width = width;
      this.height = height;
    }
  
    render = () => {
      super.move();
      image(this.image, this.posX, this.posY, this.diameter, this.diameter);
    }
  }