export class EnvironmentVariableError extends Error
{
  constructor(public variableName: string, message: string)
  {
    super(message);
  }
};

export class MissingEnvironmentVariable extends EnvironmentVariableError
{
  constructor(variableName: string, type: string)
  {
    super(variableName, `Missing environment variable: ${variableName} (expected ${type})`);
  }
};

export class InvalidEnvironmentVariable extends EnvironmentVariableError
{
  constructor(variableName: string, type: string)
  {
    super(variableName, `Invalid environment variable: ${variableName} (expected ${type})`);
  }
};
