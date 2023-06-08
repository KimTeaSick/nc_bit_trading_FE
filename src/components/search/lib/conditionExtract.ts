import { SearchCondition } from "../type/condition";

export const conditionExtract = (
  initialState: any
): SearchCondition | undefined => {
  console.log(initialState);

  if (initialState !== null) {
    const initial: SearchCondition[] = Object.values(initialState);
    return initial[0];
  } else {
    return undefined;
  }
};
