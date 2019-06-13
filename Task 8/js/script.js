let cannonImg;
let CANNON_WIDTH;
let CANNON_HEIGHT;

const WIDTH = 850;
const HEIGHT = 500;


function preload() {
  cannonImg = loadImage('assets/img/cannon.png');
}

function setup() {
  let cannon = new Cannon(cannonImg, cannonImg.width / 2, cannonImg.height / 2);

  cnv = createCanvas(WIDTH, HEIGHT);
  cnv.mouseMoved(cannon.moveCannon);

  background(164, 217, 224);

  imageMode(CENTER);
  translate(30, 485);
  image(cannon.image, 0, 0, cannon.width, cannon.height);

  frameRate(60);
}

function draw() {
}

