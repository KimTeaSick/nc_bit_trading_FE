import { Dispatch, SetStateAction, useState } from "react";
import { DisparityType } from "../type/condition";

export const useDisparity = (
  initial: DisparityType | undefined
): [DisparityType, Dispatch<SetStateAction<DisparityType>>] => {
  const [value, setValue] = useState<DisparityType>({
    flag: initial !== undefined ? initial.flag : 1,
    chart_term: initial !== undefined ? initial.chart_term : "1h",
    disparity_term: initial !== undefined ? initial.disparity_term : "15",
    low_disparity: initial !== undefined ? initial.low_disparity : "0",
    high_disparity: initial !== undefined ? initial.high_disparity : "100",
  });

  return [value, setValue];
};
