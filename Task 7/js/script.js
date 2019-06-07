// UP = 1
// DOWN = 2
// LEFT = 3
// RIGHT = 4
// RANDOM = 5
// CHAOS = 6
const HEIGHT = 400;
const WIDTH = 600;

const GROWTH_RATE = 0.1;

const MAX_BALL_DIAMETER = 1000;
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
        if (figure.posX < 0 || figure.posX > WIDTH || figure.posY < 0 || figure.posY > HEIGHT || figure.diameter > MAX_BALL_DIAMETER || figure.diagonal > MAX_RECT_DIAGONAL) {
            figures.splice(index, 1);
            return;
        }
        for (var i = 0; i < figures.length; i++) {
            if (figures[i] == figure) {
                continue;
            }
            else {
                let distance = dist(figure.posX, figure.posY, figures[i].posX, figures[i].posY);
                if (distance <= (figure.diameter / 2 + figures[i].diameter / 2)) {
                    figures.splice(index, 1);
                    figures.splice(i - 1, 1);
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

    switch (Math.round(random(1, 2))) {
        case 1:
            figure = new Ball(mouseX, mouseY, direction);
            break
        case 2:
            figure = new Pacman(mouseX, mouseY, direction);
            break
        case 3:
            figure = new Rectangle(mouseX, mouseY, direction);
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