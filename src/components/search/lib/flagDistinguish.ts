import { OptionType } from "../ConditionType";

export const flagDistinguish = (optionList: OptionType[]) => {
  const flag = [];
  if (typeof optionList === "object") {
    for (const value of optionList) {
      flag.push(value.used);
    }
    if (flag.includes(1)) {
      return true;
    } else {
      return false;
    }
  }
};
