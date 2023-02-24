import { FC } from "react";
import MyBalance from "./MyBalance";
import WalletSide from "./WalletSide";

const WalletPage: FC = () => {
  return (
    <div>
      <p>Wallet</p>
      <WalletSide />
    </div>
  );
};

export default WalletPage;
