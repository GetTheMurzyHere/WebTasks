let cannonImg;
let CANNON_WIDTH;
let CANNON_HEIGHT;

const WIDTH = 850;
const HEIGHT = 500;


function preload() {
  cannonImg = loadImage('assets/img/cannon.png');
}

function setup() {
  cnv = createCanvas(WIDTH, HEIGHT);
  cnv.mouseMoved(moveCannon);

  background(164, 217, 224);

  imageMode(CENTER);
  CANNON_WIDTH = cannonImg.width / 2;
  CANNON_HEIGHT = cannonImg.height / 2;
  translate(30, 485);
  image(cannonImg, 0, 0, CANNON_WIDTH, CANNON_HEIGHT);

  frameRate(60);
}

function draw() {
}

function moveCannon() {
  let angleRad = Math.atan((mouseY - 485) / (mouseX - 30));
  let angleDegrees = 180 * angleRad / PI;
  if (angleDegrees >= -90 && angleDegrees <=0) {
    background(164, 217, 224);  
    translate(30, 485);
    rotate(angleRad);
    image(cannonImg, 0, 0, CANNON_WIDTH, CANNON_HEIGHT);
  }
}

