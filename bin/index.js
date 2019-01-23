"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var util_1 = require("./util");
function acedia(data, dir) {
    util_1.validate(data, dir);
    data = data.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(data, "base64");
    fs.writeFileSync(dir, dataBuffer);
    return true;
}
module.exports = acedia;
//# sourceMappingURL=index.js.map