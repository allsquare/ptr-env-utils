"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnvironmentVariableError extends Error {
    constructor(variableName, message) {
        super(message);
        this.variableName = variableName;
    }
}
exports.EnvironmentVariableError = EnvironmentVariableError;
;
class MissingEnvironmentVariable extends EnvironmentVariableError {
    constructor(variableName, type) {
        super(variableName, `Missing environment variable: ${variableName} (expected ${type})`);
    }
}
exports.MissingEnvironmentVariable = MissingEnvironmentVariable;
;
class InvalidEnvironmentVariable extends EnvironmentVariableError {
    constructor(variableName, type) {
        super(variableName, `Invalid environment variable: ${variableName} (expected ${type})`);
    }
}
exports.InvalidEnvironmentVariable = InvalidEnvironmentVariable;
;
//# sourceMappingURL=errors.js.map