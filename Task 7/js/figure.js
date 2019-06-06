function Figure(x, y, direction) {
    this.posX = x;
    this.posY = y;
    this.speed = 1;
    this.color = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
    this.direction = direction;
    this.chaos = false;

    

    this.moveLeft = () => {
        this.posX = this.posX - this.speed
    }

    this.moveRight = () => {
        this.posX = this.posX + this.speed
    }

    this.moveUp = () => {
        this.posY = this.posY - this.speed
    }

    this.moveDown = () => {
        this.posY = this.posY + this.speed
    }

    this.moveRandom = () => {
        this.direction = Math.round(random(1, 5));
    }

    this.moveChaos = () => {
        this.direction = Math.round(random(1, 5));
    }

    // this.explode = () => {
    //   if (this.posX < 0 || this.posX > WIDTH || this.posY < 0 || this.posY > HEIGHT)
    // }
}