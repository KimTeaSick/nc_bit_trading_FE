export const name_change = (type: string) => {
  return type === "day_data"
    ? " day"
    : type === "week_data"
    ? " week"
    : " month";
};

const his_vaule_change = (value: string) => {
  if (value === null) value = "-";
  if (value === "ask") value = "매도";
  if (value === "bid") value = "매수";
  if (
    value !== "trailing stop" &&
    value !== "resale" &&
    value !== "price under" &&
    value !== "loss cut under" &&
    value.length > 5
  )
    value = value.substring(0, 10);

  return value;
};

const HIS_COL = [
  "코인",
  "개수",
  "개당가격",
  "금액",
  "수수료",
  "거래시간",
  "매수/매도",
  "매도이유",
];

const TABLE_ROW = ["일자", "손익금", "손익률"];
const DAY_COL = ["1일", "2일", "3일", "4일", "5일", "6일", "7일"];
const WEEK_COL = ["1주", "2주", "3주", "4주"];
const MONTH_COL = [
  "1달",
  "2달",
  "3달",
  "4달",
  "5달",
  "6달",
  "7달",
  "8달",
  "9달",
  "10달",
  "11달",
  "12달",
];

export { HIS_COL, his_vaule_change, DAY_COL, WEEK_COL, MONTH_COL, TABLE_ROW };
