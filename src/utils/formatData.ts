const snakeToCamelCase = (str: string) => str.replace(/([_][a-z])/ig, (letter) => letter.toUpperCase()
  .replace('_', ''));

const isPlainObject = (value: any) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return (prototype === null
    || prototype === Object.prototype
    || Object.getPrototypeOf(prototype) === null)
    && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
};

export const transformKeysToCamelCase = (input: any, excludeFields?: string[]): any => {
  if (isPlainObject(input)) {
    const output: { [key: string]: any; } = {};

    Object.keys(input).forEach((key) => {
      const valueObj = transformKeysToCamelCase(input[key], excludeFields);
      if (excludeFields?.includes(key)) {
        if (typeof valueObj === 'object') {
          output[snakeToCamelCase(key)] = input[key];
        }
      } else {
        output[snakeToCamelCase(key)] = valueObj;
      }
    });

    return output;
  }
  if (Array.isArray(input)) {
    return input.map((value) => transformKeysToCamelCase(value, excludeFields));
  }

  return input;
};