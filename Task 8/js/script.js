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

  cannon = new Cannon(cannonImg, cannonImg.width / 2, cannonImg.height / 2)
  cnv.mouseClicked(cannon.shoot);

  background(164, 217, 224);

  imageMode(CENTER);

  push();
  translate(30, 485);
  image(cannon.image, 0, 0, cannon.width, cannon.height);
  pop();

  frameRate(60);
}

function draw() {
  background(164, 217, 224);
  push();
  translate(30, 485);
  cannon.move();
  pop();
  if (shots.length != 0) {
    shots.forEach((shot) => {
      if ((shot.time >= shot.endTime)) {
        shot.stay = false;
      }
      else {
        push();
        translate(30, 485);
        shot.move();
        pop();
      }
    })
  }

  shots = shots.filter(shot => shot.stay);
}

