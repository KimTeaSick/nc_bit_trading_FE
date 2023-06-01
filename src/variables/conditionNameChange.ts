import { NAME_LIST_TYPE } from "@/@types/Search";

export const conditionNameChange = (conditionList?: string[] | undefined) => {
  const response = [];
  const NAME_LIST: NAME_LIST_TYPE = {
    Price: "가격",
    TransactionAmount: "가격 대금",
    MASP: "이평선 비교",
    Trend: "추세",
    Disparity: "이격도",
    MACD: "MACD",
  };
  if (conditionList !== undefined) {
    for (const condition of conditionList) {
      response.push(NAME_LIST[`${condition}`]);
    }
    return response;
  }
};
