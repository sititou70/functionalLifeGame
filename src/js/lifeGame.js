let loopMod = (val, mod) => {
  return val >= 0 ? val % mod : (val + mod) % mod;
};

let sliceAroundCells = (field, x, y) => {
  let field_size = field.length;
  return [-1, 0, 1].map((dy) => {
    return [-1, 0, 1].map((dx) => {
      return field[loopMod(y + dy, field_size)][loopMod(x + dx, field_size)];
    });
  });
};

let sum2dArray = (array_2d) => {
  return array_2d.reduce((sum, obj) => {
    return sum + obj.reduce((sum, obj) => sum + obj);
  }, 0);
};

let getNextCellState = (around_cells) => {
  let around_num = sum2dArray(around_cells) - around_cells[1][1];
  if(around_cells[1][1] === 0){
    if(around_num === 3)return 1;
    else return 0;
  }else{
    return around_num <= 1 || around_num >= 4 ? 0 : 1;
  }
};

let stepLifeGame = (field) =>{
  return Array.from(field).map((array, y) => {
    return array.map((obj, x) => {
      return getNextCellState(sliceAroundCells(field, x, y));
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
module.exports.sliceAroundCells = sliceAroundCells;
module.exports.sum2dArray = sum2dArray;
module.exports.getNextCellState = getNextCellState;
module.exports.stepLifeGame = stepLifeGame;
module.exports.drawField = drawField;
module.exports.generateRandomField = generateRandomField;
