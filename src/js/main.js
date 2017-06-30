let lifeGame = require("./lifeGame.js");

let generateMainLoop = (in_canvas_context) => {
  let canvas_context = in_canvas_context;
  let mainLoop = (field) => {
    lifeGame.drawField(field, canvas_context);
    requestAnimationFrame(() => {
      mainLoop(lifeGame.stepLifeGame(field));
    });
  };
  
  return mainLoop;
};

let query = location.href.match(/size=([0-9]+)/);
let canvas_context = document.querySelector("canvas").getContext("2d");
if(query === null){
  generateMainLoop(canvas_context)(lifeGame.generateRandomField(100));
}else{
  let size = parseInt(query[1]);
  generateMainLoop(canvas_context)(lifeGame.generateRandomField(size));
  document.querySelector("#size").value = size;
}

document.querySelector("#size").focus();
