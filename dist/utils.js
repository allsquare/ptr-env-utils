"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeOptional(f) {
    return function (name) {
        if (process.env[name] === undefined)
            return null;
        return f(name);
    };
}
exports.makeOptional = makeOptional;
//# sourceMappingURL=utils.js.map