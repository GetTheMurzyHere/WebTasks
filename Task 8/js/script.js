let cannonImg;
let klevchImg;

const WIDTH = 850;
const HEIGHT = 500;

let cannon;
let shots = [];

function preload() {
  cannonImg = loadImage('assets/img/cannon.png');
  klevchImg = loadImage('assets/img/klevch.png');
}


function setup() {
  cnv = createCanvas(WIDTH, HEIGHT);
  background(164, 217, 224);

  cannon = new Cannon(cannonImg, cannonImg.width / 2, cannonImg.height / 2)
  cnv.mouseClicked(cannon.shoot);

  imageMode(CENTER);

  push();
  translate(30, 485);
  image(cannon.image, 0, 0, cannon.width, cannon.height);

  pop();

  frameRate(60);
}

function draw() {

  background(164, 217, 224); 
  if (shots.length != 0) {
    shots.forEach((shot) => {
      if ((shot.posX >= WIDTH || shot.posY >= HEIGHT)) {
        shot.stay = false;
      }
      else {
        push();
        translate(30 + shot.startX * cannon.width / 2, 485 + shot.startY * cannon.width / 2);
        shot.move();
        image(shot.image, shot.posX, shot.posY, shot.radius + 41.6, shot.radius);
        pop();
      }
    })
  }
  push();
  translate(30, 485);
  cannon.move();
  pop();
  fill("rgb(18, 187, 74)");
  circle(13, HEIGHT + 25, cannon.width);

  shots = shots.filter((shot) => shot.stay);
}

