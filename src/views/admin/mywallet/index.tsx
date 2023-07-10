import { FC } from "react";
import Banner from "./components/Banner";
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
      <div>
        <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
          내 지갑 현황
        </h4>
      </div>
      <div className="z-20 ">
        <BitCard
          account={myProperty[0]}
          balance={myProperty[1]}
          coinList={coinList}
          image={NFt3.src}
        />
      </div>
    </div>
  );
};

export default Marketplace;
