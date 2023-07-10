import { FC } from "react";
import Banner from "./Banner";
import NFt3 from "@/assets/img/nfts/Nft3.png";
import BitCard from "@/components/common/card/BitCard";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";

const Marketplace: FC = () => {
  const { balance, coinList, myProperty } = useSelector(
    (state: RootStateType) => state.wallet
  );
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Marketplace;
