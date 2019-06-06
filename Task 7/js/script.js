// UP = 1
// DOWN = 2
// LEFT = 3
// RIGHT = 4
// RANDOM = 5
// CHAOS = 6
const HEIGHT = 400
const WIDTH = 600

let figures = []

let direction = 'STOP';

function setup() {
    cnv = createCanvas(WIDTH, HEIGHT);
    cnv.mousePressed(createFigure)
    strokeWeight(0);
    frameRate(60);
}

function draw() {
    clear();
    background(255);
    figures.forEach(function (figure, index) {
        if (figure.posX < 0 || figure.posX > WIDTH || figure.posY < 0 || figure.posY > HEIGHT) {
            figures.splice(index, 1)
            return
        }
        if (figure.chaos) {
            figure.moveChaos()
        }

        figure.render()
    })
}

function createFigure() {
    let figure;
    switch (Math.round(random(1, 2))) {
        case 1:
            figure = new Ball(mouseX, mouseY, direction);
            break
        case 2:
            figure = new Rectangle(mouseX, mouseY, direction);
            break
        case 3:
            break
    }

    figures.push(figure);
}

function move(dir) {
    direction = dir
    figures.forEach(figure => {
        if (dir == 6) {
            figure.chaos = true
        } else {
            figure.chaos = false
        }
        figure.direction = direction
    })
}

function clean() {
    figures = []
    clear();
}