import { SettingInitialStateType } from "./setting/setting.d";
import { TradingInitialState } from "./trading/trading.d";
import { WalletInitialState } from "./wallet/wallet.d";
import { CommonInitialState } from "./common/common.d";
import { CoinInitialState } from "./coin/coin";
import { DashInitialState } from "./dash/dash";
import { SearchInitialStateType } from "./search/search";
import { AutoInitialStateType } from "./autotradingCondition";
import { AutoTradingInitialState } from "./autoTrading";

export type RootStateType = {
  common: CommonInitialState;
  wallet: WalletInitialState;
  coin: CoinInitialState;
  trading: TradingInitialState;
  dash: DashInitialState;
  setting: SettingInitialStateType;
  search: SearchInitialStateType;
  autotradingCondition: AutoInitialStateType;
  autotrading: AutoTradingInitialState;
};
