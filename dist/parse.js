"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const utils_1 = require("./utils");
function MandatoryEnvInt(name) {
    const value = process.env[name];
    if (value === undefined)
        throw new errors_1.MissingEnvironmentVariable(name, 'int');
    const num = Number.parseInt(value);
    if (Number.isNaN(num))
        throw new errors_1.InvalidEnvironmentVariable(name, 'int');
    return num;
}
exports.MandatoryEnvInt = MandatoryEnvInt;
exports.OptionalEnvInt = utils_1.makeOptional(MandatoryEnvInt);
function MandatoryEnvString(name) {
    const value = process.env[name];
    if (value === undefined)
        throw new errors_1.MissingEnvironmentVariable(name, 'string');
    return value;
}
exports.MandatoryEnvString = MandatoryEnvString;
exports.OptionalEnvString = utils_1.makeOptional(MandatoryEnvString);
function MandatoryEnvBool(name) {
    const value = process.env[name];
    if (value === undefined)
        throw new errors_1.MissingEnvironmentVariable(name, 'boolean');
    switch (value) {
        case true:
        case 'true':
        case 1:
        case '1':
            return true;
        case false:
        case 'false':
        case 0:
        case '0':
            return false;
    }
    throw new errors_1.InvalidEnvironmentVariable(name, 'boolean');
}
exports.MandatoryEnvBool = MandatoryEnvBool;
exports.OptionalEnvBool = utils_1.makeOptional(MandatoryEnvBool);
//# sourceMappingURL=parse.js.map