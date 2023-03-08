import { DetailCoinType } from "@/@types/CoinList";
export type CoinInitialState = {
  detailCoin: string;
  chartTerm: string;
  chartData: any;
  chartDataStatus: string;
  avg5Data: number[];
  avg5DataStatus: string;
  avg20Data: number[];
  avg20DataStatus: string;
  avg60Data: number[];
  avg60DataStatus: string;
};
