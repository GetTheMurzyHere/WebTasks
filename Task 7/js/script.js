// UP = 1
// DOWN = 2
// LEFT = 3
// RIGHT = 4
// RANDOM = 5
// CHAOS = 6
const HEIGHT = 400;
const WIDTH = 600;

const GROWTH_RATE = 0.1;

const MAX_BALL_RADIUS = 1000;
const MAX_RECT_DIAGONAL = 150;

let figures = [];

let direction;

function setup() {
    cnv = createCanvas(WIDTH, HEIGHT);
    cnv.mousePressed(createFigure);
    strokeWeight(0);
    frameRate(60);
}

function draw() {
    background(255);
    figures.forEach(function (figure, index) {
        if (figure.posX < 0 || figure.posX > WIDTH || figure.posY < 0 || figure.posY > HEIGHT || figure.radius > MAX_BALL_RADIUS || figure.diagonal > MAX_RECT_DIAGONAL) {
            figures.splice(index, 1);
        }
        for (var i = 0; i < figures.length; i++) {
            if (figures[i] == figure) {
                continue;
            }
            else {
                let distance = dist(figure.posX, figure.posY, figures[i].posX, figures[i].posY);
                console.log(distance, (figure.radius + figures[i].radius));
                if (distance <= (figure.radius + figures[i].radius)) {

                    figures.splice(index, 1);
                    figures.splice(i, 1);
                }
            }
        }
        if (figure.chaos) {
            figure.moveChaos();
        }
        figure.render();
    })
}

function createFigure() {
    let figure;
    switch (Math.round(random(1, 1))) {
        case 1:
            figure = new Ball(mouseX, mouseY, direction);
            break
        case 2:
            figure = new Rectangle(mouseX, mouseY, direction);
            break
        case 3:
            figure = new Pacman(mouseX, mouseY, direction);
            break
    }
    figures.push(figure);
}

function move(dir) {
    figures.forEach(figure => {
        if (dir == 6) {
            figure.chaos = true;
        } else {
            figure.chaos = false;
        }
        figure.direction = dir;
    })
}

function clean() {
    figures = [];
    clear();
}