"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeOptional = void 0;
function makeOptional(f) {
    return function (name) {
        if (process.env[name] === undefined)
            return null;
        return f(name);
    };
}
exports.makeOptional = makeOptional;
//# sourceMappingURL=utils.js.map