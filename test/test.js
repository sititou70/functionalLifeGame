let lifeGame = require("../src/js/lifeGame.js");
let assert = require("assert");

describe("lifeGame.js", () => {
  it("loopMod", () => {
    assert.equal(lifeGame.loopMod(-3, 5), 2);
    assert.equal(lifeGame.loopMod(-2, 5), 3);
    assert.equal(lifeGame.loopMod(-1, 5), 4);
    assert.equal(lifeGame.loopMod(0, 5), 0);
    assert.equal(lifeGame.loopMod(1, 5), 1);
    assert.equal(lifeGame.loopMod(2, 5), 2);
    assert.equal(lifeGame.loopMod(3, 5), 3);
    assert.equal(lifeGame.loopMod(4, 5), 4);
    assert.equal(lifeGame.loopMod(5, 5), 0);
    assert.equal(lifeGame.loopMod(6, 5), 1);
  });
  
  it("getNextCellState", () => {
    let field = "000000,001100,010000,000010,001100,000000".split(",").map(str => Array.from(str, str => parseInt(str)));
    assert.equal(lifeGame.getNextCellState(field, 0, 0), 0);
    assert.equal(lifeGame.getNextCellState(field, 3, 1), 0);
    assert.equal(lifeGame.getNextCellState(field, 1, 2), 0);
    assert.equal(lifeGame.getNextCellState(field, 2, 1), 1);
    assert.equal(lifeGame.getNextCellState(field, 2, 3), 1);
  });
  
  it("stepLifeGame", () => {
    let field = "000000,001100,010000,000010,001100,000000".split(",").map(str => Array.from(str, str => parseInt(str)));
    let nextField = "000000,001000,001100,001100,000100,000000".split(",").map(str => Array.from(str, str => parseInt(str)));
    assert.deepEqual(lifeGame.stepLifeGame(field), nextField);
  });
  
  it("generateRandomField", () => {
    let testField = lifeGame.generateRandomField(10);
    assert.equal(testField.length, 10);
    testField.forEach((array) => {
      assert.equal(typeof array, "object");
      array.forEach((x) => {
        assert.equal(x === 0 || x === 1, true);
      });
    });
  });
});
