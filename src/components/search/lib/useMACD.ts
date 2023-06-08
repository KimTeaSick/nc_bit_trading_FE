import { Dispatch, SetStateAction, useState } from "react";
import { MACDType } from "../type/condition";

export const useMACD = (
  initial: MACDType | undefined
): [MACDType, Dispatch<SetStateAction<MACDType>>] => {
  const [value, setValue] = useState<MACDType>({
    flag: initial !== undefined ? initial.flag : 1,
    chart_term: initial !== undefined ? initial.chart_term : "1h",
    short_disparity: initial !== undefined ? initial.short_disparity : "12",
    long_disparity: initial !== undefined ? initial.long_disparity : "26",
    signal: initial !== undefined ? initial.signal : "9",
    up_down: initial !== undefined ? initial.up_down : "up",
  });
  return [value, setValue];
};
