let leverBody;
let leverBall;
let mapBG;
let screenBG;
let aimingBG;
let aimingPulley;

let keyUp;
let keyDown;
let keyLeft;
let keyRight;
let keyFire;

let crank_bg;
let crank_0;
let crank_1;
let crank_2;
let crank_3;
let crank_4;
let crank_5;
let crank_6;
let crank_7;

let switchSpriteOn;
let switchSpriteOff;

let chamberFrameSprite;
let chamberDoorSprite;

let shelfSpriteRed;
let shelfSpriteGreen;
let shelfSpriteBlue;

let ejectButtonSprite;

let shellSpriteRed;
let shellSpriteGreen;
let shellSpriteBlue;

let screenCorridor;
let screenObstacles;
let screenWall;

let scopeCorridor;
let scopeObstacles;
let scopeWall;

let button;
let crank;
let eject;
let fire;
let flap;
let growl;
let move;
let poweroff;
let shellgrab;
let shellin;
let turn;
let pull;
let ambience;
let turnon;
let gameover;

function preload() {
  leverBody = loadImage('assets/cockpit/lever.png');
  leverBall = loadImage('assets/cockpit/lever_ball.png');

  crank_bg = loadImage('assets/cockpit/crank/crank_bg.png');
  crank_0 = loadImage('assets/cockpit/crank/crank_0.png');
  crank_1 = loadImage('assets/cockpit/crank/crank_1.png');
  crank_2 = loadImage('assets/cockpit/crank/crank_2.png');
  crank_3 = loadImage('assets/cockpit/crank/crank_3.png');
  crank_4 = loadImage('assets/cockpit/crank/crank_4.png');
  crank_5 = loadImage('assets/cockpit/crank/crank_5.png');
  crank_6 = loadImage('assets/cockpit/crank/crank_6.png');
  crank_7 = loadImage('assets/cockpit/crank/crank_7.png');

  mapBG = loadImage('assets/cockpit/map_border.png');
  screenBG = loadImage('assets/cockpit/screen_border.png');
  aimingBG = loadImage('assets/cockpit/aiming_border.png');

  keyUp = loadImage('assets/cockpit/keys/up.png');
  keyDown = loadImage('assets/cockpit/keys/down.png');
  keyLeft = loadImage('assets/cockpit/keys/left.png');
  keyRight = loadImage('assets/cockpit/keys/right.png');
  keyFire = loadImage('assets/cockpit/keys/fire.png');

  aimingPulley = loadImage('assets/cockpit/aiming_pulley.png');

  switchSpriteOn = loadImage('assets/cockpit/switch_on.png');
  switchSpriteOff = loadImage('assets/cockpit/switch_off.png');

  chamberFrameSprite = loadImage('assets/cannon/chamberframe.png');
  chamberDoorSprite = loadImage('assets/cannon/chamberdoor.png');

  shelfSpriteRed = loadImage('assets/cannon/shelves/red.png');
  shelfSpriteGreen = loadImage('assets/cannon/shelves/green.png');
  shelfSpriteBlue = loadImage('assets/cannon/shelves/blue.png');

  ejectButtonSprite = loadImage('assets/cannon/ejectbutton.png');

  shellSpriteRed = loadImage('assets/cannon/shells/red.png');
  shellSpriteGreen = loadImage('assets/cannon/shells/green.png');
  shellSpriteBlue = loadImage('assets/cannon/shells/blue.png');

  screenCorridor = loadImage('assets/screen/corridor.png');
  screenObstacles = loadImage('assets/screen/obstacles.png');
  screenWall = loadImage('assets/screen/wall.png');

  scopeCorridor = loadImage('assets/screen/corridor_scope.png');
  scopeObstacles = loadImage('assets/screen/obstacles_scope.png');
  scopeWall = loadImage('assets/screen/wall_scope.png');

  ambience = loadSound('assets/sounds/ambience.wav');
}
