import NFt3 from "@/assets/img/nfts/Nft3.png";

import CoinCard from "@/components/card/Coincard";
import { CoinType } from "@/@types/CoinList";
import Link from "next/link";
import { FC } from "react";
import { krwChage } from "@/lib/krwChage";
import { CHANGE_KR_NAME } from "@/variables/coinNameChange";

interface CoinListProps {
  coinList: CoinType[];
}

const CoinList: FC<CoinListProps> = ({ coinList }) => {
  console.log(coinList);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            코인 리스트
          </h4>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-6">
          {coinList.map((coin, index) => (
            <Link key={index} href={`coin/${coin[0]}`}>
              <CoinCard
                title={CHANGE_KR_NAME(coin[0])}
                price={krwChage(coin[1].closing_price)}
                extra=""
                image={NFt3.src}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinList;
