function Figure(x, y, direction) {
    this.posX = x;
    this.posY = y;
    this.speed = 1;
    this.velocity = random(0.02)
    this.color = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
    this.direction = direction;
    this.chaos = false;    
    this.isStay = true;

    this.moveLeft = () => {
        this.speed = this.speed + this.velocity
        this.posX = this.posX - this.speed
    }

    this.moveRight = () => {
        this.speed = this.speed + this.velocity
        this.posX = this.posX + this.speed
    }

    this.moveUp = () => {
        this.speed = this.speed + this.velocity
        this.posY = this.posY - this.speed
    }

    this.moveDown = () => {
        this.speed = this.speed + this.velocity
        this.posY = this.posY + this.speed
    }

    this.moveRandom = () => {
        this.direction = Math.round(random(1, 5));
    }

    this.moveChaos = () => {
        this.direction = Math.round(random(1, 5));
    }
}