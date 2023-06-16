export const fixed = (
  value: string | number,
  number: number
): string | number => {
  const returnValue = Number(value);
  return returnValue.toFixed(number);
};
