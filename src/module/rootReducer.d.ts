import { TradingInitialState } from "./trading/trading.d";
import { WalletInitialState } from "./wallet/wallet.d";
import { CommonInitialState } from "./common/common.d";
import { CoinInitialState } from "./coin/coin";
import { DashInitialState } from "./dash/dash";

export type RootStateType = {
  common: CommonInitialState;
  wallet: WalletInitialState;
  coin: CoinInitialState;
  trading: TradingInitialState;
  dash: DashInitialState;
};
