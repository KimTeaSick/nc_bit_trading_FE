import { WalletInitialState } from "./wallet/wallet.d";
import { CommonInitialState } from "./common/common.d";
import { CoinInitialState } from "./coin/coin";

export type RootStateType = {
  common: CommonInitialState;
  wallet: WalletInitialState;
  coin: CoinInitialState;
};
