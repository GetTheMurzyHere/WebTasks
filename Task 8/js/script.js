let isPlaying = false;

let canvas;
let handyFont;

let cannonImg;
let klevchImg;
let lifeImg;
let lostLifeImg;

const WIDTH = 850;
const HEIGHT = 500;

let cannon;
let shots = [];
let enemies = [];
let lifes = [];
let lifesLeft = 3;
let gameStarted = false;

let score = 0;

function playAgain() {
  $('#menu-window').slideUp('slow');
  $('#lose-window').slideUp('slow');
  gameStarted = true;
  shots = [];
  enemies = [];
  lifes = [lifeImg, lifeImg, lifeImg];
  score = 0;
  spawnEnemies(10);
  loop();
}

function preload() {
  cannonImg = loadImage('assets/img/cannon.png');
  klevchImg = loadImage('assets/img/klevch.png');
  lifeImg = loadImage('assets/img/heart.png');
  lostLifeImg = loadImage('assets/img/greyheart.png')

  handyFont = loadFont('assets/fonts/hAndy.ttf');
}

function setup() {
  // if (!isPlaying) {
  //   noCanvas();
  // }
  // else {
  canvas = createCanvas(WIDTH, HEIGHT);
  background(164, 217, 224);

  lifes = [lifeImg, lifeImg, lifeImg];

  cannon = new Cannon(cannonImg, cannonImg.width / 2, cannonImg.height / 2)
  canvas.mouseClicked(() => cannon.shoot());

  imageMode(CENTER);

  push();
  translate(30, 485);
  image(cannon.image, 0, 0, cannon.width, cannon.height);
  pop();

  spawnEnemies(10);

  frameRate(60);
  // }
}


function draw() {
  // if (!isPlaying) {
  //   return;
  // }
  // console.log(1)
  background(164, 217, 224);
  textFont(handyFont);
  fill('#000000');
  textSize(32);
  text("Очки: " + score, 130, 25)
  if (shots.length != 0) {
    shots.forEach((shot) => {
      if ((shot.posX >= WIDTH || shot.posY >= HEIGHT)) {
        shot.stay = false;
      }
      else {
        for (let i = 0; i < enemies.length; i++) {
          if (enemies[i] instanceof AirEnemy) {
            let distance = dist(shot.posX + (30 + shot.startX * cannon.width / 2), shot.posY + (485 + shot.startY * cannon.width / 2), enemies[i].posX, enemies[i].posY);
            if (distance <= (shot.diameter / 2 + enemies[i].diameter / 2)) {
              shot.stay = false;
              enemies[i].stay = false;
              score += 10;
            }
          }
        }
      }
      shots = shots.filter((shot) => shot.stay);
      enemies = enemies.filter((enemy) => enemy.stay);
      push();
      translate(30 + shot.startX * cannon.width / 2, 485 + shot.startY * cannon.width / 2);
      shot.render();
      pop();
    })
  }
  enemies.forEach((enemy) => {
    if (enemy.posX <= 35) {
      lifes[lifesLeft - 1] = lostLifeImg;
      lifesLeft--;
      enemies.shift();
    }
  })

  if (lifesLeft == 0) {
    lifesLeft = 3;
    noLoop();
    $('#lose-window').slideDown('slow');
    $('#score').html("Ваш счёт: " + score + " очков.");
  }

  enemies.forEach((enemy) => {
    enemy.render();
  })
  drawLifes();
  fill("#ffffff");
  line(35, 500, 35, 0)
  push();
  translate(30, 485);
  cannon.move();
  pop();
  fill("rgb(18, 187, 74)");
  circle(13, HEIGHT + 25, cannon.width);
  fill("#ffffff");

  textSize(28);
  text(cannon.timeToReload > 0 ? Math.round(cannon.timeToReload * 100) / 100 : 'OK!', 5, 490);

  if (!gameStarted) {
    noLoop();
  }
}

function spawnEnemies(count) {
  let delta = 0;
  for (let i = 0; i < count; i++) {
    let enemy = new AirEnemy(klevchImg, klevchImg.width / 10);
    enemy.posX += delta;
    enemies.push(enemy);
    delta += 175;
  }
}

function drawLifes() {
  let x = 50;
  lifes.forEach((life) => {
    image(life, x, 16, life.width / 10, life.height / 10);
    x += 30
  })
}