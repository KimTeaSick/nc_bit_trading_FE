import coin_list from "./coin_list.json";

export const CHANGE_KR_NAME = (value: string) => {
  for (let coin of coin_list) {
    if (coin.en_name === value) return coin.kr_name;
  }
};
