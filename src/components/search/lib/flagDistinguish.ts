import { OptionType } from "../ConditionType";

export const flagDistinguish = (optionList: OptionType[]) => {
  const flag = [];
  if (typeof optionList === "object") {
    for (const value of optionList) {
      flag.push(value.Used);
    }
    if (flag.includes(1)) {
      return true;
    } else {
      return false;
    }
  }
};
