type REASON_LIST_TYPE = {
  "loss cut over": string;
  "loss cut under": string;
  "price over": string;
  "price under": string;
  "disparity over": string;
  "disparity under": string;
  "macd signal": string;
  [key: string]: string;
};

export const SELL_REASON = (value: string) => {
  const REASON_LIST: REASON_LIST_TYPE = {
    "loss cut over": "로스컷 익절",
    "loss cut under": "로스컷 손절",
    "price over": "단가 기준 상승",
    "price under": "단가 기준 하락",
    "disparity over": "이평선 대비 상승",
    "disparity under": "이평선 대비 하락",
    "macd signal": "시그널 하향 돌파",
    "trailing stop": "트레일링 스탑",
    resale: "재 매도",
  };
  return value ? REASON_LIST[value] : "-";
};
