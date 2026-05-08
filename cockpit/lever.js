function leverLogic(x, y, scale) {
  leverScale = scale

  //fill('rgb(131, 129, 122)'); rectMode(CENTER); rect(x, y, 100 * scale, 200 * scale);

  //fill('rgb(48, 45, 48)'); rect(x, y, 30 * scale, 150 * scale);

  imageMode(CENTER);
  image(leverBody, x, y, 100 * scale, 200 * scale);

  let r = (100 / 1.25) * scale
  // Initialising Variables
  circlePressed = false;
  circleCollide = false;
  circleX = x;
  circleY = y - (leverOffset);

  // Detecting collision with mouse
  if(dist(mouseX, mouseY, circleX, circleY) < r / 2) {
    circleCollide = true;
    fill('rgb(224, 72, 52)');

    // Holding function
    if (mouseIsPressed) {
      let leverBoundaryDown = 100 * leverScale
      let leverBoundaryUp = -100 * leverScale

      //fill('rgb(255, 0, 0)');

      //console.log(leverOffset);
      leverOffset += mouseInitialPos - mouseY;
      if (leverOffset >= leverBoundaryDown) {
        leverOffset = leverBoundaryDown;
        holdingForward = true;
      }
      if (leverOffset <= leverBoundaryUp) leverOffset = leverBoundaryUp;
      mouseInitialPos = mouseY;

      circlePressed = true;
    }
    
  } else {
    let driftAmount = 2 * leverScale

    holdingForward = false;
    circleCollide = false;
    if (leverOffset < 0) {leverOffset += driftAmount;}
    if (leverOffset > 0) {leverOffset -= driftAmount;}
    //fill('rgb(255, 206, 60)');
  }

  // Drawing the circle
  //circle(circleX, circleY, r);
  imageMode(CENTER);
  image(leverBall, circleX, circleY, r, r);

  if (holdingForward && !mechaMoving) {
    leverTimer.timerLoop();

    if (leverTimer.timerAction(0.5)) {
      mechaMoveCheck();
      mechaMoving = true;
    }
  } else {
    leverTimer.timerReset();
  }
}

function mechaMoveCheck() {
  if (areaHostile) {
      ambience.stop();
      gameover.play();
      bgColour = 0;
      gameOver = true;
  }
  let mechaPotentialPosition = mechaPosition;

  if (mechaOrientation == 1) {
    mechaPotentialPosition -= 8;
  }
  if (mechaOrientation == 2) {
    mechaPotentialPosition -= 1;

    if ( (mechaPotentialPosition + 1) % 8 == 0) {
      return;
    }

  }
  if (mechaOrientation == 3) {
    mechaPotentialPosition += 8;
  }
  if (mechaOrientation == 4) {
    mechaPotentialPosition +=1;

    if ( mechaPotentialPosition % 8 == 0) {
      return;
    }
  }

  if (mechaPotentialPosition < 0 || mechaPotentialPosition > 63) {
    return
  }

  if (!currentAreaMap.includes(mechaPotentialPosition)) {
    return
  }

  mechaPosition = mechaPotentialPosition;
  move.play();

  if (currentAreaHostile.includes(mechaPotentialPosition)) {
    growl.play();
    areaHostile = true;
  }

  if (mechaPosition == currentGoal) {
    currentArea++;
    copyMap()
  }

  mechaNext();
}

function mechaNext() {
  let mechaPotentialPosition = mechaPosition;

  if (mechaOrientation == 1) {
    mechaPotentialPosition -= 8;
  }
  if (mechaOrientation == 2) {
    mechaPotentialPosition -= 1;
  }
  if (mechaOrientation == 3) {
    mechaPotentialPosition += 8;
  }
  if (mechaOrientation == 4) {
    mechaPotentialPosition +=1;
  }

  mechaNextPosition = mechaPotentialPosition;
  if (currentAreaObstacles.includes(mechaNextPosition)) {
    obstacleForward = true;
    currentObstacle = createVector(currentAreaObstacleCoords[mechaNextPosition].x, currentAreaObstacleCoords[mechaNextPosition].y)
    currentObstacleColour = currentAreaObstacleColours[mechaNextPosition]
  }
  
}