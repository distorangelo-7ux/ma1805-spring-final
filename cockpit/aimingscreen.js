function aimingScreenLogic(screenX, screenY, screenSizeMultiplier) {
  rectMode(CENTER);
  translateMultiplier = (screenSizeMultiplier * 256); screenSize = 52 * screenSizeMultiplier;

  // Pulley
  if (isPulling) {
    screenY = mouseY - translateMultiplier * 1.2;
    if (screenY > gameOriginY + (gameWindowScale) * 1.5) {
      pull.play();
      isPulling = false;
      aiming = true;
    }
  }

  pulleyPos = createVector(screenX, screenY + translateMultiplier * 1.2)
  pulleyWidth = 4 * screenSize
  pulleyHeight = screenSize

  // Pulley String
  fill ('#483939'); rect(screenX, screenY + translateMultiplier * 0.9, 0.2 * screenSize, 2 * screenSize)

   // https://editor.p5js.org/rjgilmour/sketches/F8RUWBXIW (Collision code)
  if (mouseX < pulleyPos.x + pulleyWidth / 2 && mouseX > pulleyPos.x - pulleyWidth / 2 &&
      mouseY < pulleyPos.y + pulleyHeight / 2 && mouseY > pulleyPos.y - pulleyHeight / 2
    ) {withinAiming = true;} else { withinAiming = false; }

  //fill ('#ffffff'); rect(pulleyPos.x, pulleyPos.y, pulleyWidth, pulleyHeight)
  image(aimingPulley, pulleyPos.x, pulleyPos.y, pulleyWidth, pulleyHeight);

  // Main
  fill ('#6e7071'); rect(screenX, screenY, 16 * screenSize, 9 * screenSize)
  imageMode(CENTER);
  image(aimingBG, screenX, screenY, 16 * screenSize, 9 * screenSize);

  // Aiming screen
  aimingScreenSize = screenSize * 2;
  aimingScreenWidth = 4 * aimingScreenSize;
  aimingScreenHeight = 3 * aimingScreenSize;
  
  fill ('#7aaffa');
  rect(screenX - translateMultiplier * 0.6, screenY, aimingScreenWidth, aimingScreenHeight)

  if (currentAreaMap.includes(mechaNextPosition)) {
      image(scopeCorridor,screenX - translateMultiplier * 0.6, screenY, aimingScreenWidth, aimingScreenHeight);
    } else {
      image(scopeWall,screenX - translateMultiplier * 0.6, screenY, aimingScreenWidth, aimingScreenHeight);
    }

    if (obstacleForward) {
      image(scopeObstacles,screenX - translateMultiplier * 0.6, screenY, aimingScreenWidth, aimingScreenHeight);
    }

  // Colour indicator
  colourScreenSize = screenSize * 0.5
  
  fill ('#393c40');
  if (currentObstacleColour == 1) {fill ('#f02407');}
  if (currentObstacleColour == 2) {fill ('#5ceb3f');}
  if (currentObstacleColour == 3) {fill ('#3fadeb');}
  rect(screenX + translateMultiplier * 0.9, screenY - translateMultiplier * 0.5, 8 * colourScreenSize, 2 * colourScreenSize)

  // Arrow keys
  keySize = 2 * colourScreenSize
  upKeys = createVector(screenX + translateMultiplier * 0.9, screenY - translateMultiplier * 0);
  firingKeys = createVector(screenX + translateMultiplier * 0.9, screenY + translateMultiplier * 0.25);
  downKeys = createVector(screenX + translateMultiplier * 0.9, screenY + translateMultiplier * 0.5);
  leftKeys = createVector(screenX + translateMultiplier * 0.65, screenY + translateMultiplier * 0.25);
  rightKeys = createVector(screenX + translateMultiplier * 1.15, screenY + translateMultiplier * 0.25);

  fill ('#393c40');

  //square(upKeys.x, upKeys.y, keySize);
  image(keyUp, upKeys.x, upKeys.y, keySize, keySize);
  
  //square(firingKeys.x, firingKeys.y, keySize);
  image(keyFire, firingKeys.x, firingKeys.y, keySize, keySize);
  
  //square(downKeys.x, downKeys.y, keySize);
  image(keyDown, downKeys.x, downKeys.y, keySize, keySize);
  
  //square(leftKeys.x, leftKeys.y, keySize);
  image(keyLeft, leftKeys.x, leftKeys.y, keySize, keySize);
  
  //square(rightKeys.x, rightKeys.y, keySize);
  image(keyRight, rightKeys.x, rightKeys.y, keySize, keySize);

  // Screen Pointer

  pointerSize = screenSize * 1
  
  noFill(); strokeWeight(pointerSize / 16); stroke(255);
  square((screenX - translateMultiplier * 0.6) + pointerOffsetX, screenY + pointerOffsetY, pointerSize);
  strokeWeight(1); stroke(0);
  
  if (obstacleForward) {
    fill('#ff1f1f79');
    square((
      screenX - translateMultiplier * 0.6) + (currentObstacle.x * (pointerSize / 8)),
      screenY - (currentObstacle.y * (pointerSize / 8)),
      pointerSize);
  }

  // Cover if switch is off
  if (!switchOn) {
      fill ('#000000'); rect(screenX - translateMultiplier * 0.6, screenY, aimingScreenWidth, aimingScreenHeight)
  }

}

function keyDetection() {
  button.play();
  if(dist(mouseX, mouseY, upKeys.x, upKeys.y) < keySize / 2) {screenPointerChange("up")}
  if(dist(mouseX, mouseY, firingKeys.x, firingKeys.y) < keySize / 2) {screenPointerChange("fire")}
  if(dist(mouseX, mouseY, downKeys.x, downKeys.y) < keySize / 2) {screenPointerChange("down")}
  if(dist(mouseX, mouseY, leftKeys.x, leftKeys.y) < keySize / 2) {screenPointerChange("left")}
  if(dist(mouseX, mouseY, rightKeys.x, rightKeys.y) < keySize / 2) {screenPointerChange("right")}
}

function screenPointerChange(direction) {
  if ( match(direction, 'up') ) {
    if (pointerIncrementY < 18) {
      pointerIncrementY += 1;
      pointerOffsetY -= pointerSize / 8;
    }
  }

  if ( match(direction, 'fire') ) {
    if (pointerIncrementX == currentObstacle.x && pointerIncrementY == currentObstacle.y) {

      if (mechaLoadedColour == currentObstacleColour) {
        currentAreaMap.push(mechaNextPosition);
        //currentAreaObstacles.splice(0, 1);
        for (i = 0; i < currentAreaObstacles.length; i++) {
          if (mechaNextPosition == currentAreaObstacles[i]) {
            currentAreaObstacles.splice(i, 1);
          }
        }
        obstacleForward = false;
        currentObstacleColour = 0;
      }
    }
    if (!ammoEjected) {
      fire.play();
      switchOn = false;
      button.play();
      poweroff.play();
      ambience.stop();
    }
  }

  if ( match(direction, 'down') ) {
    if (pointerIncrementY > -18) {
      pointerIncrementY -= 1;
      pointerOffsetY += pointerSize / 8;
    }
  }

  if ( match(direction, 'left') ) {
    if (pointerIncrementX > - 26) {
      pointerIncrementX -= 1;
      pointerOffsetX -= pointerSize / 8;
    }
  }

  if ( match(direction, 'right') ) {
    if (pointerIncrementX < 26) {
      pointerIncrementX += 1;
      pointerOffsetX += pointerSize / 8;
    }
  }

}

function screenReset() {
  pointerOffsetX = 0;
  pointerOffsetY = 0;
  pointerIncrementX = 0;
  pointerIncrementY = 0;
  aiming = false; 
}