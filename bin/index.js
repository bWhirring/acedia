"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function acedia(param) {
    var data = param.data, dir = param.dir;
    data = data.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(data, "base64");
    fs.writeFileSync(dir, dataBuffer);
}
module.exports = acedia;
//# sourceMappingURL=index.js.map