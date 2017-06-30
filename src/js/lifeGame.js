let loopMod = (val, mod) => {
  return val >= 0 ? val % mod : (val + mod) % mod;
};

let generateGetNextCellState = () => {
  let around_deltas = Array.from({length: 9}, (x, i) => {
    return {dx: parseInt(i / 3) - 1, dy: i % 3 - 1};
  }).filter(obj => !(obj.dx === 0 && obj.dy === 0));
  
  return (field, x, y) => {
    if(field[y][x] === 0){
      let alive_num = 0;
      for(let i = 0; i < around_deltas.length; i++){
        alive_num += field[loopMod(y + around_deltas[i].dy, field.length)][loopMod(x + around_deltas[i].dx, field.length)];
        if(i - alive_num === 5)return 0;
        if(alive_num >= 4)return 0;
      }
      return 1;
    }else{
      let alive_num = around_deltas.reduce((sum, obj) => sum + field[loopMod(y + obj.dy, field.length)][loopMod(x + obj.dx, field.length)], 0);
      return alive_num <= 1 || alive_num >= 4 ? 0 : 1;
    }
  };
};

let stepLifeGame = (field) => {
  let getNextCellState = generateGetNextCellState();
  return Array.from(field).map((array, y) => {
    return array.map((obj, x) => {
      return getNextCellState(field, x, y);
    });
  });
};

let drawField = (field, canvas_context) =>{
  let canvas_size = canvas_context.canvas.width;
  canvas_context.clearRect (0, 0, canvas_size, canvas_size);
  
  let cell_size = canvas_size / field.length;
  return field.map((array, y) => {
    return array.map((obj, x) => {
      if(obj === 1)canvas_context.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);
      return obj;
    });
  });
};

let generateRandomField = (size) => {
  return Array.from({length: size}, () => {
    return Array.from({length: size}, () => Math.random() > 0.5 ? 1: 0);
  });
};

module.exports.loopMod = loopMod;
module.exports.generateGetNextCellState = generateGetNextCellState;
module.exports.stepLifeGame = stepLifeGame;
module.exports.drawField = drawField;
module.exports.generateRandomField = generateRandomField;
