import Banner from "./components/Banner";
import NFt2 from "@/assets/img/nfts/Nft2.png";
import NFt4 from "@/assets/img/nfts/Nft4.png";
import NFt3 from "@/assets/img/nfts/Nft3.png";
import NFt5 from "@/assets/img/nfts/Nft5.png";
import NFt6 from "@/assets/img/nfts/Nft6.png";
import avatar1 from "@/assets/img/avatars/avatar1.png";
import avatar2 from "@/assets/img/avatars/avatar2.png";
import avatar3 from "@/assets/img/avatars/avatar3.png";

import tableDataTopCreators from "@/views/admin/coinlist/variables/tableDataTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import CoinCard from "@/components/card/Coincard";
import { CoinType } from "@/@types/CoinList";
import Link from "next/link";
import { FC } from "react";

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
                title={coin[0]}
                price={coin[1].closing_price}
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
