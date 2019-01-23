"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var path = require("path");
var acedia = require("../index");
var data = require("./data");
test("canvas toDataURL save as image", function () {
    var result = acedia(data, path.resolve(__dirname, "../../test.png"));
    expect(result).toBe(true);
});
//# sourceMappingURL=index.test.js.map