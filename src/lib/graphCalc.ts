export const graphCalc = (
  arr: any[]
): { max: number; min: number; gap: number } => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const gap = max - min;
  return { max, min, gap };
};
