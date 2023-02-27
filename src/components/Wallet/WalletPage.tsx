import { krwChage } from "@/lib/krwChage";
import { RootStateType } from "@/module/rootReducer.d";
import { stringify } from "querystring";
import { FC } from "react";
import { useSelector } from "react-redux";
import MyBalance from "./MyBalance";
import WalletSide from "./WalletSide";
import { WalletTopSection } from "./WalletStyled";

const WalletPage: FC = () => {
  const { myProperty } = useSelector((state: RootStateType) => state.wallet);
  const money = Math.round(Number(myProperty));
  return (
    <div>
      <WalletTopSection>
        <p>Wallet</p>
        <p>{krwChage(String(money))} 원</p>
      </WalletTopSection>
      <WalletSide />
    </div>
  );
};

export default WalletPage;
