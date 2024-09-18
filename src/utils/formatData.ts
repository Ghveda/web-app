const snakeToCamelCase = (str: string) =>
  str.replace(/([_][a-z])/gi, (letter) =>
    letter.toUpperCase().replace('_', ''),
  );

const isPlainObject = (value: any) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return (
    (prototype === null ||
      prototype === Object.prototype ||
      Object.getPrototypeOf(prototype) === null) &&
    !(Symbol.toStringTag in value) &&
    !(Symbol.iterator in value)
  );
};

export const transformKeysToCamelCase = (
  input: any,
  excludeFields?: string[],
): any => {
  if (isPlainObject(input)) {
    const output: { [key: string]: any } = {};

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

export const formatNumber = (x: number) =>
  new Intl.NumberFormat('de-DE').format(x);

export const getDifferenceInYearsAndMonths = (
  startDate: string,
  endDate: string,
) => {
  const d1 = new Date(startDate);
  const d2 = new Date(endDate);

  let months =
    (d2.getFullYear() - d1.getFullYear()) * 12 +
    (d2.getMonth() - d1.getMonth());

  let days = d2.getDate() - d1.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
    days += prevMonth.getDate();
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years} Year${years !== 1 ? 's' : ''}, ${remainingMonths} Month${remainingMonths !== 1 ? 's' : ''} & ${days} Day${days !== 1 ? 's' : ''} are Left`;
};

export const getPercentagePassed = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const now = new Date();

  if (now < start) {
    return 0;
  }
  if (now > end) {
    return 100;
  }

  const totalDuration = end.getTime() - start.getTime();
  const timePassed = now.getTime() - start.getTime();
  const percentagePassed = (timePassed / totalDuration) * 100;

  return percentagePassed.toFixed(2);
};
