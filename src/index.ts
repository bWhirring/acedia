import * as fs from "fs";
import { validate } from "./util";

function acedia(data: string, dir: string) {
  validate(data, dir);
  data = data.replace(/^data:image\/\w+;base64,/, "");
  const dataBuffer = new Buffer(data, "base64");
  fs.writeFileSync(dir, dataBuffer);
}

module.exports = acedia;
