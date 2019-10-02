export function makeOptional<T>(f: (name: string) => T): (name: string) => T | null
{
  return function (name: string)
  {
    if (process.env[name] === undefined)
      return null;
    return f(name);
  }
}
