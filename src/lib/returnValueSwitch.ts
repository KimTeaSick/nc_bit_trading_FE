import { RETURN_VALUE_TYPE } from "@/@types/Common";

export const returnValueSwitch = (value: any) => {
  const RETURN_VALUE: RETURN_VALUE_TYPE = {
    444: new Error(),
  };
  return value === 444 ? RETURN_VALUE[444] : value;
};
