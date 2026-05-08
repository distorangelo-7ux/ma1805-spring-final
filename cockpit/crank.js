function initiateThresholds() {
  for (let i = 0; i < angleIterations; i++) {
    let difference = 360 / angleIterations;

    if (angleThresholds[i-1] >= 360) {
      angleThresholds[i-1] = 360 - angleIterations;
      starting = 0;
      multiplier = 1;
    }

    append(angleThresholds, starting + (difference * multiplier) );
    multiplier++;
  }
}

function crankLogic(crankX, crankY, crankSize) {
  circleOrigin.x = crankX; circleOrigin.y = crankY; circleSize = 25 * crankSize;

  if (!crankRendered) {
    circleThreshold = circleSize * 10;
    circleCancel = circleSize * 1.5;
    crankRendered = true;
  }

  // DEBUGGING
  fill('#272429'); circle(circleOrigin.x, circleOrigin.y, circleThreshold);
  fill(200); circle(circleOrigin.x, circleOrigin.y, circleCancel);

  //fill('#00ff51'); textSize(25); //text(userLocation, 50, 50); text(angleThresholds[userLocation + 1], 50, 100); text(angle, 50, 150); 
  //text( ("number of rotations: "+successfulRotations) , 50, 500);

  // Draw
    fill(configurableColor); 
    circle(circleOrigin.x, circleOrigin.y, circleSize);
    image(crank_bg, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold);

  imageMode(CENTER);
  switch (userLocation) {
    case -1: image(crank_0, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    case 0: image(crank_0, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    case 1: image(crank_1, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    case 2: image(crank_2, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    case 3: image(crank_3, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    case 4: image(crank_4, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    case 5: image(crank_5, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    case 6: image(crank_6, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    case 7: image(crank_7, circleOrigin.x, circleOrigin.y, circleThreshold, circleThreshold); break;
    
  }

  // Check if within the circle
  if (
    dist(mouseX, mouseY, circleOrigin.x, circleOrigin.y) < circleThreshold / 2
    &
    dist(mouseX, mouseY, circleOrigin.x, circleOrigin.y) > circleCancel / 2
  ) {
    withinCircle = true;
  } else {
    withinCircle = false; rotationCancelled(); configurableColor = '#fcfeff';
  }

  if (angle < 190 & angle > 170 & withinCircle) {
      configurableColor = '#ff200b';
  } else {
      configurableColor = '#fcfeff';
  }

  mouseVector.set(mouseX, mouseY);

  let v0 = p5.Vector.sub(mouseVector, circleOrigin);
  let referenceVector = createVector( circleOrigin.x + 50, circleOrigin.y );
  let v1 = p5.Vector.sub(referenceVector, circleOrigin);

  angle = 180 - round(v0.angleBetween(v1), 2 );

  //console.log(angle);
  if (mouseHold) {
    fill(0);
    configurableColor = '#4db0ee';
    //text("Holding...", 50, 600);

    //Angle Checking
    if (userLocation < (angleIterations / 2) ) {
      if (angle > angleThresholds[ userLocation + 1 ]) {
        crank.play()
        userLocation++;
        console.log("Passed");
      }
    } if (userLocation >= (angleIterations / 2) && userLocation < 16) {
      if (angle > angleThresholds[ userLocation + 1 ] && angle < 300) {
        crank.play()
        userLocation++;
        console.log("Passed");
      }
    }

    if (userLocation == angleIterations - 1 && !mechaMoving) {
      userLocation = 0;
      successfulRotations++;
      console.log("Rotated!");
    }
  }

  if (successfulRotations == 1) {
    turn.play();
    mechaMoving = true;
    if (areaHostile) {
        ambience.stop();
        gameover.play();
        bgColour = 0;
        gameOver = true;
    }
    mechaOrientation--;
    if (mechaOrientation < 1) {
      mechaOrientation = 4;
    }
    mechaNext();
    successfulRotations = 0;
  }
}

function rotationCancelled() {
  successfulRotations = 0;
  mouseHold = false;
  userLocation = -1;
}