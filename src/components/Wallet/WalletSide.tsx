import { FC } from "react";
import MyBalance from "./MyBalance";
import { WalletSideSection } from "./WalletStyled";

const WalletSide: FC = () => {
  return (
    <WalletSideSection>
      <MyBalance />
    </WalletSideSection>
  );
};

export default WalletSide;
