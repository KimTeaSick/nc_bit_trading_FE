import Banner from "./components/Banner";
import NFt3 from "@/assets/img/nfts/Nft3.png";
import BitCard from "@/components/card/BitCard";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";

const Marketplace = () => {
  const { balance, coinList, myProperty } = useSelector(
    (state: RootStateType) => state.wallet
  );
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/*  Banner */}
        <Banner />

        {/* Header */}
        <div className="mb-4 mt-5 flex flex-row justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            내 지갑 현황
          </h4>
        </div>

        {/* trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-1">
          <BitCard
            account={myProperty[0]}
            balance={myProperty[1]}
            coinList={coinList}
            image={NFt3.src}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
