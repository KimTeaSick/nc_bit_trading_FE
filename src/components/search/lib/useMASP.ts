import { Dispatch, SetStateAction, useState } from "react";
import { MASPType } from "../type/condition";

export const useMASP = (
  initial: MASPType | undefined
): [MASPType, Dispatch<SetStateAction<MASPType>>] => {
  const [value, setValue] = useState<MASPType>({
    flag: initial !== undefined ? initial.flag : 1,
    chart_term: initial !== undefined ? initial.chart_term : "1h",
    first_disparity: initial !== undefined ? initial.first_disparity : "15",
    comparison: initial !== undefined ? initial.comparison : ">=",
    second_disparity: initial !== undefined ? initial.second_disparity : "30",
  });
  return [value, setValue];
};
