import { Dispatch, SetStateAction, useState } from "react";
import { TrendType } from "../type/condition";
import { conditionExtract } from "./conditionExtract";

export const useTrend = (
  initial: TrendType | undefined
): [TrendType, Dispatch<SetStateAction<TrendType>>] => {
  const [value, setValue] = useState<TrendType>({
    flag: initial !== undefined ? initial.flag : 1,
    chart_term: initial !== undefined ? initial.chart_term : "1h",
    MASP: initial !== undefined ? initial.MASP : "5",
    trend_term: initial !== undefined ? initial.trend_term : "3",
    trend_type: initial !== undefined ? initial.trend_type : "up_trend",
    trend_reverse: initial !== undefined ? initial.trend_reverse : "0",
  });
  return [value, setValue];
};
