let canvas;
let handyFont;

let cannonImg;

let klevchImg;
let baranovImg;
let kanImg;
let kleninImg;
let malyavinImg;
let matafonovImg;
let shepelevaImg;
let suschenkoImg;
let tankImg;
let tankHitImg;

let lifeImg;
let lostLifeImg;

const WIDTH = 850;
const HEIGHT = 500;

let cannon;
let shots = [];
let enemies = [];
let enemyCount = 10;
let lifes = [];
let lifesLeft = 3;
let gameStarted = false;
let score = 0;
let level;
let boss;
let isSpawned = false;

let nickname;

function preload() {
  cannonImg = loadImage('assets/img/cannon.png');
  klevchImg = loadImage('assets/img/klevch.png');
  baranovImg = loadImage('assets/img/baranov.png');
  kanImg = loadImage('assets/img/kan.png');
  malyavinImg = loadImage('assets/img/malyavin.png');
  matafonovImg = loadImage('assets/img/matafonov.png');
  shepelevaImg = loadImage('assets/img/shepeleva.png');
  suschenkoImg = loadImage('assets/img/suschenko.png');
  kleninImg = loadImage('assets/img/klenin.png');
  tankImg = loadImage('assets/img/tank.png')
  tankHitImg = loadImage('assets/img/tankHit.png')
  klevchHitImg = loadImage('assets/img/klevchHit.png')

  lifeImg = loadImage('assets/img/heart.png');
  lostLifeImg = loadImage('assets/img/greyheart.png');

  handyFont = loadFont('assets/fonts/hAndy.ttf');

}

function setup() {
  canvas = createCanvas(WIDTH, HEIGHT);
  background(164, 217, 224);

  lifes = [lifeImg, lifeImg, lifeImg];

  cannon = new Cannon(cannonImg, cannonImg.width / 2, cannonImg.height / 2)
  canvas.mouseClicked(() => cannon.shoot());

  imageMode(CENTER);

  frameRate(60);
}

function play() {
  nickname = $('#nickname').val();
  if (nickname == "") {
    $('#nickname').css('background', '#f3a0a0');
    setTimeout(() => {
      $('#nickname').css('background', '#ffffff');
    }, 300);
    return;
  }
  $('#menu-window').slideUp('slow');
  $('#lose-window').slideUp('slow');
  localStorage.setItem(nickname, 0);
  enemies = [];
  level = 4;
  enemyCount = 10;
  spawnEnemies(enemyCount);
  gameStarted = true;
  shots = [];
  lifes = [lifeImg, lifeImg, lifeImg];
  score = 0;
  loop();
}

function draw() {
  if (gameStarted) {

    if (enemies.length == 0 && lifesLeft != 0 && level != 4) {
      level++;
      enemyCount += 5;
      gameStarted = false;
      $('#win-lvl-window').slideDown('slow');
      setTimeout(() => {
        $('#win-lvl-window').slideUp('slow');
        spawnEnemies(enemyCount);
        gameStarted = true;
      }, 3500)
    }

    background(164, 217, 224);

    if (level == 4) {
      if (!isSpawned) {
        boss = new Boss(klevchImg, 1200, 250, 0.8, klevchImg.width / 1.1, klevchImg.height / 1.1);
        isSpawned = true;
      }
      if (boss != undefined) {
        if (boss.health > 0 && enemies.length == 0) {
          boss.render();
        }
        if (boss.posX - (boss.width / 4) <= 35) {
          background(164, 217, 224);
          $('#lose-window').slideDown('slow');
          $('.score').html('Ваш счёт: ' + score + ' очков.');
          localStorage.setItem(nickname, score);
          gameStarted = false;
          noLoop();
        }
      }
    }

    if (shots.length != 0) {
      shots.forEach((shot) => {
        if ((shot.posX >= WIDTH || shot.posY >= HEIGHT)) {
          shot.stay = false;
        }
        else {

          for (let i = 0; i < enemies.length; i++) {

            if (enemies[i] instanceof AirEnemy) {
              let distance = dist(shot.posX + (30 + shot.startX), shot.posY + (485 - shot.startY), enemies[i].posX, enemies[i].posY);
              if (distance <= (shot.diameter / 2 + enemies[i].width / 2)) {
                shot.stay = false;
                enemies[i].stay = false;
                score += 10;
              }
            }

            if (enemies[i] instanceof GroundEnemy) {
              let shotX = shot.posX + (30 + shot.startX);
              let shotY = shot.posY + (485 - shot.startY);
              let testX = shotX;
              let testY = shotY;

              if (shotX < enemies[i].posX) testX = enemies[i].posX - enemies[i].width / 2;
              else if (shotX > enemies[i].posX + enemies[i].width / 2) testX = enemies[i].posX + enemies[i].width / 2;
              if (shotY < enemies[i].posY) testY = enemies[i].posY - enemies[i].height / 2;
              else if (shotY > enemies[i].posY + enemies[i].height / 2) testY = enemies[i].posY + enemies[i].height / 2;

              let distX = shotX - testX;
              let distY = shotY - testY;
              let distance = Math.sqrt((distX * distX) + (distY * distY));

              if (distance <= shot.diameter / 2) {
                shot.stay = false;
                enemies[i].health--;
                if (enemies[i].health < 0) {
                  enemies[i].stay = false;
                }
                else {
                  enemies[i].image = tankHitImg;
                  setTimeout(() => {
                    enemies[i].image = tankImg;
                  }, 150)
                }
              }
            }

          }

          if (level == 4) {
            if (boss != undefined) {
              if (boss.health > 0) {
                let distance = dist(shot.posX + (30 + shot.startX * cannon.width / 2), shot.posY + (485 + shot.startY * cannon.width / 2), boss.posX, boss.posY);
                if (distance <= (shot.diameter / 2 + boss.width / 2)) {
                  shot.stay = false;
                  boss.health--;
                  boss.image = klevchHitImg;
                  setTimeout(() => {
                    boss.image = klevchImg;
                  }, 150)
                }
                if (boss.health == 0) {
                  background(164, 217, 224);
                  boss = undefined;
                  delete (boss);
                  score += 100;
                  $('#win-game-window').slideDown('slow');
                  $('.score').html('Ваш счёт: ' + score + ' очков.');
                  localStorage.setItem(nickname, score);
                  gameStarted = false;
                  noLoop();
                  return;
                }
              }
            }
          }

        }
        shots = shots.filter((shot) => shot.stay);
        enemies = enemies.filter((enemy) => enemy.stay);
        shot.render();
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
      $('.score').html('Ваш счёт: ' + score + ' очков.');
      localStorage.setItem(nickname, score);
    }

    enemies.forEach((enemy) => {
      enemy.render();
      strokeWeight(2)
    })

    stroke('#B22222');
    strokeWeight(3);
    line(35, 500, 35, 0);

    stroke('#000000');
    strokeWeight(1);
    cannon.render();
    fill('rgb(18, 187, 74)');
    circle(13, HEIGHT + 25, cannon.width);

    textFont(handyFont);
    fill('#000000');
    textSize(32);
    text('Очки: ' + score, 140, 25);
    drawLifes();

    fill('#ffffff');
    textSize(28);
    text(cannon.timeToReload > 0 ? Math.round(cannon.timeToReload * 100) / 100 : 'OK!', 5, 490);
  }
}

function spawnEnemies(count) {
  let delta = 0;
  let speed;
  for (let i = 0; i < count; i++) {
    let face;
    let temp = Math.round(random(1, 6));
    switch (temp) {
      case 1:
        face = baranovImg;
        break;
      case 2:
        face = kleninImg;
        break;
      case 3:
        face = matafonovImg;
        break;
      case 4:
        face = kanImg;
        break;
      case 5:
        face = malyavinImg;
        break;
      case 6:
        face = suschenkoImg;
        break;
    }

    switch (level) {
      case 1:
        speed = 1.5;
        break;
      case 2:
        speed = 2.5;
        break;
      case 3:
        speed = 3.2;
        break;
      case 4:
        speed = 2.5;
    }

    let enemy = new AirEnemy(face, 950 + delta, random(40, 350), speed, face.width / 10, face.height / 10);

    enemies.push(enemy);
    delta += 175;

  }
  if (level > 2) {
    delta = 0;
    for (let i = 2; i < level; i++) {
      let tank = new GroundEnemy(tankImg, 1200, 450, 0.7, tankImg.width / 5, tankImg.height / 5)
      tank.posX += delta;
      enemies.push(tank);
      delta += 500;
    }
  }
}

function drawLifes() {
  let x = 60;
  lifes.forEach((life) => {
    image(life, x, 16, life.width / 10, life.height / 10);
    x += 30
  })
}

function toMenu() {
  background(164, 217, 224);
  $('#scoreboard-window').slideUp('slow');
  $('#lose-window').slideUp('slow');
  setTimeout(() => {
    $('#menu-window').slideDown('slow');
  }, 800)
}

function showScoreboard() {
  background(164, 217, 224);
  $('#scoreboard').empty().append('<thead><tr><td>Никнейм</td><td>Очки</td></tr></thead>');
  for (let i = 0; i < localStorage.length; i++) {
    $('#scoreboard').append('<tr><td>' + localStorage.key(i) + '</td>' + '<td>' + localStorage.getItem(localStorage.key(i)) + '</td></tr>')
  }
  $('.container').slideUp('slow');
  setTimeout(() => {
    $('#scoreboard-window').slideDown('slow');
    background(164, 217, 224);
  }, 800)
}