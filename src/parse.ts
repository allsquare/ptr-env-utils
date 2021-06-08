import { URL } from 'url';
import { MissingEnvironmentVariable, InvalidEnvironmentVariable } from './errors';
import { makeOptional } from './utils';

//TODO: strict parsing
export function MandatoryEnvInt(name: string): number
{
  const value = process.env[name];
  if (value === undefined)
    throw new MissingEnvironmentVariable(name, 'int');
  const num = Number.parseInt(value);
  if (Number.isNaN(num))
    throw new InvalidEnvironmentVariable(name, 'int');
  return num;
}

export const OptionalEnvInt = makeOptional(MandatoryEnvInt);


export function MandatoryEnvString(name: string): string
{
  const value = process.env[name];
  if (value === undefined)
    throw new MissingEnvironmentVariable(name, 'string');
  return value;
}

export const OptionalEnvString = makeOptional(MandatoryEnvString);


export function MandatoryEnvBool(name: string): boolean
{
  const value: any = process.env[name];
  if (value === undefined)
    throw new MissingEnvironmentVariable(name, 'boolean');
  switch (value)
  {
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
  throw new InvalidEnvironmentVariable(name, 'boolean');
}

export const OptionalEnvBool = makeOptional(MandatoryEnvBool);

export function MandatoryEnvURL(name: string): URL
{
  const value = process.env[name];
  if (value === undefined)
    throw new MissingEnvironmentVariable(name, 'url');
  try
  {
    const url = new URL(value);
    return url;
  }
  catch (e)
  {
    throw new InvalidEnvironmentVariable(name, 'url');
  }
}

export const OptionalEnvURL = makeOptional(MandatoryEnvURL);
