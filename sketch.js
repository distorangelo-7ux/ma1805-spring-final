let bgColour = 25;

let mouseVector; let mouseOffsetY = 0; let mouseInitialPos = 0; let leverOffset = 0;

let leverScale; let crankRendered; let circleOrigin; let circleSize;
let circleThreshold; let circleCancel; let successfulRotations = 0;

let angleThresholds = []; let angleIterations = 9;
let starting = 180; let multiplier = 0; let angle;

let gameOriginX; let gameOriginY; let gameWindowScale;

let circlePressed = false; let circleCollide = false;
let withinCircle = false; let mouseHold = false; let userLocation = -1;
let configurableColor ='#fcfeff';

let withinSwitch = false; let withinAiming = false;
let switchOn = false;
let aiming = false;

let pulleyPos; let pulleyWidth; let pulleyHeight; let isPulling
let upKeys; let firingKeys; let downKeys; let leftKeys; let rightKeys; let keySize;

let aimingScreenWidth; let aimingScreenHeight; let aimingScreenSize;
let pointerOffsetX = 0; let pointerOffsetY = 0;

let pointerIncrementX = 0; let pointerIncrementY = 0;

let mechViewpoint;
let withinCannon = false; let withinCockpit = false;
let ammoEjected = true; let withinLoader; let withinEject;
let mechaLoadedColour = 0;

let holdingForward = false;
let mechaMoving = false;
let obstacleForward = false;
let mechaOrientation = 4;
let mechaPosition = 0;
let mechaNextPosition = mechaPosition;

let currentGoal = 0;
let currentArea = 1;
let currentAreaMap = [];
let currentAreaHostile = [];
let currentAreaObstacles = [];
let currentAreaObstacleCoords = {};
let currentAreaObstacleColours = {};

let currentObstacle = [];
let currentObstacleColour = 0;

let areaHostile = false;

let gameOver = false;

function setup() {
  button = loadSound('assets/sounds/button.ogg');
  crank = loadSound('assets/sounds/crank.wav');
  eject = loadSound('assets/sounds/eject.wav');
  fire = loadSound('assets/sounds/fire.mp3');
  flap = loadSound('assets/sounds/flap.wav');
  gameover = loadSound('assets/sounds/gameover.wav');
  growl = loadSound('assets/sounds/growl.wav');
  move = loadSound('assets/sounds/move.wav');
  poweroff = loadSound('assets/sounds/poweroff.flac');
  shellgrab = loadSound('assets/sounds/shellgrab.wav');
  shellin = loadSound('assets/sounds/shellin.wav');
  turn = loadSound('assets/sounds/turn.ogg');
  turnon = loadSound('assets/sounds/turnon.wav');
  pull = loadSound('assets/sounds/pull.wav');

  leverTimer = new Timer(250);
  moveTimer = new Timer(250);
  hostileTimer = new Timer(250);

  redAmmo = new Ammunition(0, 0, 0, 1);
  greenAmmo = new Ammunition(0, 0, 0, 2);
  blueAmmo = new Ammunition(0, 0, 0, 3);

  circleOrigin = createVector(0, 0); mouseVector = createVector(0, 0);

  frameRate(60); createCanvas(windowWidth, windowHeight); angleMode(DEGREES);
  initiateThresholds();
  initiateMaps();
  copyMap();
  mechaNext();

  mechViewpoint = 0;
}

function initiateMaps() {
  areaOneEndingPos = 3;
  areaOneStartingPos = 56;
  areaOneMap = [3 ,11, 19, 24, 25, 26, 27, 32, 40, 41, 42, 43, 44, 45, 46, 54, 56, 57, 58, 59, 60, 61, 62];
  areaOneHostile = [];
  areaOneObstacles = [];
  areaOneObstacleCoords = {}
  areaOneObstacleColours = {}

  areaTwoEndingPos = 31;
  areaTwoStartingPos = 60;
  areaTwoMap = [8, 9, 12, 16, 20, 24, 28, 29, 30, 31, 32, 40, 41, 43, 44, 52, 60];
  areaTwoHostile = [40, 52];
  areaTwoObstacles = [10, 11, 42];
  areaTwoObstacleCoords = {10: createVector(-5, 5), 11: createVector(7, -10), 42: createVector(8, 2)}
  areaTwoObstacleColours = {10: 1, 11: 2, 42:3}

  areaThreeEndingPos = 57;
  areaThreeStartingPos = 24;
  areaThreeMap = [11, 12, 19, 24, 26, 27, 29, 30, 37, 41, 42, 43, 45, 49, 51, 52, 53, 57];
  areaThreeHostile = [37, 52, 49];
  areaThreeObstacles = [25, 28];
  areaThreeObstacleCoords = {25: createVector(-9, 10), 28: createVector(7, -12)}
  areaThreeObstacleColours = {25: 2, 28: 1}

  areaFourEndingPos = 48;
  areaFourStartingPos = 0;
  areaFourMap = [0, 8, 16, 24, 32, 48];
  areaFourHostile = [];
  areaFourObstacles = [40];
  areaFourObstacleCoords = {40: createVector(4,-4)}
  areaFourObstacleColours = {40: 3}
}

function copyMap() {
  if (currentArea == 1) {
      currentGoal = areaOneEndingPos;
      mechaPosition = areaOneStartingPos;

      currentAreaMap = areaOneMap;
      currentAreaHostile = areaOneHostile;
      currentAreaObstacles = areaOneObstacles;
      currentAreaObstacleCoords = areaOneObstacleCoords;
      currentAreaObstacleColours = areaOneObstacleColours;
  }

  if (currentArea == 2) {
      currentGoal = areaTwoEndingPos;
      mechaPosition = areaTwoStartingPos;

      currentAreaMap = areaTwoMap;
      currentAreaHostile = areaTwoHostile;
      currentAreaObstacles = areaTwoObstacles;
      currentAreaObstacleCoords = areaTwoObstacleCoords;
      currentAreaObstacleColours = areaTwoObstacleColours;
  }
  
  if (currentArea == 3) {
      currentGoal = areaThreeEndingPos;
      mechaPosition = areaThreeStartingPos;

      currentAreaMap = areaThreeMap;
      currentAreaHostile = areaThreeHostile;
      currentAreaObstacles = areaThreeObstacles;
      currentAreaObstacleCoords = areaThreeObstacleCoords;
      currentAreaObstacleColours = areaThreeObstacleColours;
  }

  if (currentArea == 4) {
      currentGoal = areaFourEndingPos;
      mechaPosition = areaFourStartingPos;

      currentAreaMap = areaFourMap;
      currentAreaHostile = areaFourHostile;
      currentAreaObstacles = areaFourObstacles;
      currentAreaObstacleCoords = areaFourObstacleCoords;
      currentAreaObstacleColours = areaFourObstacleColours;
  }

  if (currentArea == 5) {
    ambience.stop();
    bgColour = 255;
    gameOver = true;
  }
}

function draw() {
  background(bgColour);
  gameOriginX = (windowWidth / 2) - (2 * gameWindowScale)
  gameOriginY = (windowHeight / 2) - (1.5 * gameWindowScale)
  gameWindowScale = 256

  if (gameOver) {
    return;
  }

  // Game Window
  fill('#0b0a0b'); rectMode(CORNER);
  rect(gameOriginX, gameOriginY, 4 * gameWindowScale, 3 * gameWindowScale)

  if (mechViewpoint == 0) drawCockpit(gameOriginX, gameOriginY, gameWindowScale);
  if (mechViewpoint == 1) drawCannon(gameOriginX, gameOriginY, gameWindowScale);
  
  fill(bgColour); noStroke(); rectMode(CORNER);
  rect(gameOriginX, gameOriginY - (gameWindowScale) * 3, 4 * gameWindowScale, 3 * gameWindowScale);
  stroke(0);

  if (mechaMoving) {
    moveTimer.timerLoop();

    if (moveTimer.timerAction(0.5)) {
      moveTimer.timerReset();
      mechaMoving = false;
    }
  }

  if (areaHostile && !switchOn) {
    hostileTimer.timerLoop();

    if (hostileTimer.timerAction(3)) {
      hostileTimer.timerReset();
      flap.play();
      areaHostile = false;
    }
  }

  if (!switchOn) {
      fill('#0c0a0ee1'); rectMode(CORNER);
      rect(gameOriginX, gameOriginY, 4 * gameWindowScale, 3 * gameWindowScale)
  }
}

function mousePressed() {
  if (ammoEjected) {
    redAmmo.ammoGrab();
    greenAmmo.ammoGrab();
    blueAmmo.ammoGrab();
  }

  if (withinCockpit) {mechViewpoint = 0; withinCockpit = false; button.play();}
  if (withinCannon) {mechViewpoint = 1; withinCannon = false; button.play();}
  
  if (withinEject && !ammoEjected) {
    eject.play();
    redAmmo.ejectAmmo();
    greenAmmo.ejectAmmo();
    blueAmmo.ejectAmmo();
    ammoEjected = true;
  }

  if (aiming) {keyDetection();}

  if (withinAiming) {
    if (aiming) {screenReset(); return}

    if (isPulling) {isPulling = false; button.play();} else {isPulling = true}; button.play();
  }

  if (!aiming) {
      if (withinSwitch) {
        if (switchOn) {
          switchOn = false;
          button.play();
          poweroff.play();
          ambience.stop();
        } 
        else {
          switchOn = true;
          button.play();
          turnon.play();

          //ambience.play();
          ambience.loop();
          }
    }

    if (withinCircle) {mouseHold = (angle < 190 & angle > 170);};
    if (circleCollide) {mouseInitialPos = mouseY;};
  }
}

function mouseReleased() {
  if (redAmmo.releaseAmmo(withinLoader) || greenAmmo.releaseAmmo(withinLoader) || blueAmmo.releaseAmmo(withinLoader)) {
    shellin.play();
    ammoEjected = false;
  }

  rotationCancelled();
  if (circlePressed) {circlePressed = false;}
}