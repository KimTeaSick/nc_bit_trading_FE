import axios from "axios";

export const CoinSearch = (url: string, body: any) => {
  const response = axios.post(url, body);
  return response;
};
