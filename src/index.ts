import * as fs from "fs";

interface Params {
  data: string;
  dir: string;
}

function acedia(param: Params) {
  let { data, dir } = param;
  data = data.replace(/^data:image\/\w+;base64,/, "");
  const dataBuffer = new Buffer(data, "base64");
  fs.writeFileSync(dir, dataBuffer);
}

module.exports = acedia;
