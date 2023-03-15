import { DetailCoinType } from "@/@types/CoinList";
export type CoinInitialState = {
  detailCoin: string;
  chartTerm: "1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h";
  chartData: any;
  chartDataStatus: string;
  avg5Data: number[];
  avg5DataStatus: string;
  avg20Data: number[];
  avg20DataStatus: string;
  avg60Data: number[];
  avg60DataStatus: string;
  avg5DataTrend: null | boolean;
  avg20DataTrend: null | boolean;
  avg60DataTrend: null | boolean;
};
