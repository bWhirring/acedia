"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validate(data, dir) {
    if (!data) {
        throw new Error("Property 'data' is missing ");
    }
    else if (typeof data !== "string") {
        throw new Error("Property 'data' Type is string ");
    }
    if (!dir) {
        throw new Error("Property 'dir' is missing ");
    }
    else if (typeof dir !== "string") {
        throw new Error("Property 'dir' Type is string ");
    }
}
exports.validate = validate;
//# sourceMappingURL=util.js.map