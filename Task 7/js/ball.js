function Ball(x, y) {
    this.posX = x;
    this.posY = y;
    this.speed = 10;
    this.color = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
    this.radius = random(5, 70)

    this.render = () => {
        fill(this.color.r, this.color.g, this.color.b)
        circle(this.posX, this.posY, this.radius)
    }

    this.moveLeft = () => {
        this.x = this.x + this.speed
    }
}