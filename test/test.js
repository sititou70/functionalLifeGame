let testjs = require("../src/js/test.js");
let assert = require("assert");

describe("test.js", () => {
  it("hello", () => {
    assert.equal(testjs.hello(), "hello");
  });
});