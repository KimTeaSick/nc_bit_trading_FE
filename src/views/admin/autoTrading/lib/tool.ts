export const fixed = (
  value: string | number | undefined,
  number: number
): string | number => {
  const returnValue = Number(value);
  if (returnValue < 1000) return returnValue.toFixed(2);
  else return returnValue.toFixed(number);
};
