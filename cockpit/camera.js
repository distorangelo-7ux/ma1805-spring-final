function cameraLogic(camX, camY, camSizeMultiplier) {
  camSize = 36 * camSizeMultiplier
  camWidth = 16 * camSize;
  camHeight = 10 * camSize

  //fill ('#bababa'); rectMode(CENTER); rect(camX, camY, camWidth * 1.1, camHeight * 1.1);
  image(screenBG, camX, camY, camWidth * 1.1, camHeight * 1.1);

    if (switchOn) {
    fill ('#7aaffa'); rectMode(CENTER); rect(camX, camY, camWidth, camHeight);
    if (currentAreaMap.includes(mechaNextPosition)) {
      image(screenCorridor,camX, camY, camWidth, camHeight);
    } else {
      image(screenWall,camX, camY, camWidth, camHeight);
    }

    if (obstacleForward) {
      image(screenObstacles,camX, camY, camWidth, camHeight);
    }
  }
}