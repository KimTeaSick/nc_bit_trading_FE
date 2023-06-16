export const dataChanger = (value: string | number | null): string | number => {
  if (value === null) return "사용안함";
  else return value;
};

export const THStatusChanger = (value: string) => {
  const STATUS: STATUS_TYPE = {
    0: "보유중",
    1: "매수 중",
    2: "분할 매수",
    3: "첫 번째 매도 중",
    4: "매도 취소",
    5: "매도 중",
    6: "매도 완료",
  };
  return STATUS[value];
};
