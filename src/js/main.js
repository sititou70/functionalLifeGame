let lifeGame = require("./lifeGame.js");

let generateMainLoop = (inCanvasContext, drawInterval) => {
  let canvasContext = inCanvasContext;
  let mainLoop = (field) => {
    lifeGame.drawField(field, canvasContext);
    setTimeout(() => {
      mainLoop(lifeGame.stepLifeGame(field));
    }, drawInterval);
  };
  
  return mainLoop;
};

generateMainLoop(document.querySelector("canvas").getContext("2d"), 0)(lifeGame.generateRandomField(100));
