import "jest";
import * as path from "path";

const acedia = require("../index");
const data = require("./data");

test("canvas toDataURL save as image", () => {
  let result = acedia(data, path.resolve(__dirname, "../../test.png"));
  expect(result).toBe(true);
});
