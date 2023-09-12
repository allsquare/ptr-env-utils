"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalEnvStringList = exports.MandatoryEnvStringList = exports.OptionalEnvURL = exports.MandatoryEnvURL = exports.OptionalEnvBool = exports.MandatoryEnvBool = exports.OptionalEnvString = exports.MandatoryEnvString = exports.OptionalEnvInt = exports.MandatoryEnvInt = void 0;
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
exports.OptionalEnvInt = (0, utils_1.makeOptional)(MandatoryEnvInt);
function MandatoryEnvString(name) {
    const value = process.env[name];
    if (value === undefined)
        throw new errors_1.MissingEnvironmentVariable(name, 'string');
    return value;
}
exports.MandatoryEnvString = MandatoryEnvString;
exports.OptionalEnvString = (0, utils_1.makeOptional)(MandatoryEnvString);
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
exports.OptionalEnvBool = (0, utils_1.makeOptional)(MandatoryEnvBool);
function MandatoryEnvURL(name) {
    const value = process.env[name];
    if (value === undefined)
        throw new errors_1.MissingEnvironmentVariable(name, 'url');
    try {
        const url = new URL(value);
        return url;
    }
    catch (e) {
        throw new errors_1.InvalidEnvironmentVariable(name, 'url');
    }
}
exports.MandatoryEnvURL = MandatoryEnvURL;
exports.OptionalEnvURL = (0, utils_1.makeOptional)(MandatoryEnvURL);
function MandatoryEnvStringList(name, opts = {}) {
    const value = process.env[name];
    if (value === undefined)
        throw new errors_1.MissingEnvironmentVariable(name, 'string[]');
    return value.split(opts.separator || ',');
}
exports.MandatoryEnvStringList = MandatoryEnvStringList;
exports.OptionalEnvStringList = (0, utils_1.makeOptional)(MandatoryEnvStringList);
//# sourceMappingURL=parse.js.map