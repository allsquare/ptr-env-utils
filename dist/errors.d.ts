export declare class EnvironmentVariableError extends Error {
    variableName: string;
    constructor(variableName: string, message: string);
}
export declare class MissingEnvironmentVariable extends EnvironmentVariableError {
    constructor(variableName: string, type: string);
}
export declare class InvalidEnvironmentVariable extends EnvironmentVariableError {
    constructor(variableName: string, type: string);
}
