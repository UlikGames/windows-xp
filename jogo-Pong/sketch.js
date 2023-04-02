//game logic itself

let collided = false;

let chanceOfError = 0;

//scoreboard
let myPoints = 0;
let pointsOpponent = 0;

//game sounds
let racket;
let point;
let trail;

function preload() {
  trail = loadSound("trail.mp3");
  point = loadSound("point.mp3");
  racket = loadSound("racket.mp3");
}

//pellet
let xpellet = 300;
let ypellet = 200;
let diameter = 25;
let radius   = diameter / 2;

//speed of pellet
let velocityXpellet = 6;
let velocityYpellet = 6;
let racketLength = 10;
let racketHeight = 90;

//raquete
let xRacket = 5;
let yRacket = 150;

//raquete oponente
let xRacketOpponent = 585;
let yRacketOpponent = 150;
let velocityYopponent;

function setup() {
  createCanvas(600, 400);
  trail.loop();
}

function draw() {
  background(0);
  showpellet();
  movingpellet();
  checkColissionBoard();
  showRacket(xRacket, yRacket);
  moveMyRacket();
  checkColissionRacket(xRacket, yRacket);
  showRacket(xRacketOpponent, yRacketOpponent);
  moveOpponentRacket();
  checkColissionRacket(xRacketOpponent, yRacketOpponent);
  includeScoreboard();
  marcapoint();
}

function showpellet() {
  circle(xpellet, ypellet, diameter);
}

function movingpellet() {
  xpellet += velocityXpellet;
  ypellet += velocityYpellet;
}

function checkColissionBoard() {
  if (xpellet + radius > width || xpellet - radius < 0) {
    velocityXpellet *= -1;
  }
  if (ypellet + radius > height || ypellet - radius < 0) {
    velocityYpellet *= -1;
  }
}

function showRacket(x, y) {
  rect(x, y, racketLength, racketHeight);
}

function moveMyRacket() {
  if (keyIsDown(UP_ARROW)) {
    yRacket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRacket += 10;
  }
}

function checkColissionRacket(x, y) {
  collided = collideRectCircle(
    x,
    y,
    racketLength,
    racketHeight,
    xpellet,
    ypellet,
    radius
  );
  if (collided) {
    velocityXpellet *= -1;
    racket.play();
  }
}

function moveOpponentRacket() {
  yRacketOpponent = ypellet * 0.715;
}

function includeScoreboard() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(myPoints, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pointsOpponent, 470, 26);
}

function marcapoint() {
  if (xpellet > 585) {
    myPoints += 1;
    point.play();
  }
  if (xpellet < 15) {
    pointsOpponent += 1;
    point.play();
  }
}
