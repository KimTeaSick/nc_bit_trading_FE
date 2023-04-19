import Widget from "@/components/widget/Widget";
import DetailCard from "./components/coindetailCard";
import { FC } from "react";
import { IoDocuments } from "react-icons/io5";
import { RootStateType } from "@/module/rootReducer.d";
import { useSelector } from "react-redux";
import { krwChage } from "@/lib/krwChage";

interface CoinDetailProps {
  selectCoin: any;
  data: any;
  coinName: any;
}

const CoinDetail: FC<CoinDetailProps> = ({ selectCoin, data, coinName }) => {
  console.log("selectCoin, dataselectCoin, data", selectCoin, data);

  const { avg5DataTrend } = useSelector((state: RootStateType) => state.coin);

  console.log("avg5DataTrend", selectCoin);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/*  Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            코인 상세페이지
          </h4>
        </div>

        {/*  trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 mb-3">
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={""}
            subtitle={coinName}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={""}
            subtitle={"하락"}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={`금일 최고가 : ${krwChage(
              String(selectCoin?.data?.max_price)
            )} 원   금일 최저가 : ${krwChage(
              String(selectCoin?.data?.min_price)
            )} 원 `}
            subtitle={""}
          />
        </div>
        <div className="w-full">
          <DetailCard />
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
