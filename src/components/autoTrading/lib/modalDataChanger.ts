export const dataChanger = (value: string | number | null): string | number => {
  if (value === null) return "사용안함";
  else return value;
};
