import { PossessionCoinType } from "./../../@types/Dash.d";
export type RecommendPriceType = {
  coin: string;
  separation: number;
};
export type DashInitialState = {
  recommendPrice: recommendPrice[];
  recommendPriceStatus: string;
  accountInfo: number[];
  accountInfoStatus: string;
  possessionCoin: PossessionCoinType[];
  possessionCoinStatus: string;
};
