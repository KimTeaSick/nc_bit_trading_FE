import { FC } from "react";

import DetailCard from "./components/coindetailCard";
import TopWidget from "./components/TopWidget";

interface CoinDetailProps {
  selectCoin: any;
  data: any;
  coinName: string | string[];
}

const CoinDetail: FC<CoinDetailProps> = ({ selectCoin, coinName }) => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            코인 상세페이지
          </h4>
        </div>
        <TopWidget
          selectCoin={selectCoin}
          coinName={!Array.isArray(coinName) ? coinName : ""}
        />
        <div className="flex gap-4">
          <div
            id="chart_section"
            onWheel={() => (window.document.body.style.overflow = "hidden")}
            onMouseLeave={() => (window.document.body.style.overflow = "auto")}
          >
            <DetailCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
