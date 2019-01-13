import * as fs from "fs";
import { validate, Params } from "./util";

function acedia(param: Params) {
  validate(param);
  let { data, dir } = param;
  data = data.replace(/^data:image\/\w+;base64,/, "");
  const dataBuffer = new Buffer(data, "base64");
  fs.writeFileSync(dir, dataBuffer);
}

module.exports = acedia;
