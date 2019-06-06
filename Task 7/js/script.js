let balls = []

function setup() {
    createCanvas(600, 400);
    strokeWeight(0);
    frameRate(60);
}

function draw() {
    balls.forEach(ball => {
        ball.render()
    })
}

function mouseClicked() {
    createBall()
}

const createBall = () => {
    balls.push(new Ball(mouseX, mouseY));
}

const clean = () => {
    clear();
}