let lifeGame = require("./lifeGame.js");

let generateMainLoop = (inCanvasContext) => {
  let canvasContext = inCanvasContext;
  let mainLoop = (field) => {
    lifeGame.drawField(field, canvasContext);
    requestAnimationFrame(() => {
      mainLoop(lifeGame.stepLifeGame(field));
    });
  };
  
  return mainLoop;
};

generateMainLoop(document.querySelector("canvas").getContext("2d"))(lifeGame.generateRandomField(100));
