import Widget from "@/components/common/widget/Widget";
import DetailCard from "./components/coindetailCard";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { IoDocuments } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { krwChage } from "@/lib/krwChage";
import WarningButton from "./components/WarningButton";
import { updateCoinWarning } from "@/pages/api/coinListAPIs";
import { getDisparityOptionThunk } from "@/pages/api/settingAPI";
import { CHANGE_KR_NAME } from "@/variables/coinNameChange";

interface CoinDetailProps {
  selectCoin: any;
  data: any;
  coinName: string;
  flag: any;
  setFlag: Dispatch<SetStateAction<number>>;
}

const CoinDetail: FC<CoinDetailProps> = ({ selectCoin, coinName }) => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getDisparityOptionThunk());
  }, [dispatch]);

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
            subtitle={CHANGE_KR_NAME(coinName)}
            button={
              <WarningButton
                isWarning={selectCoin?.data.warning === "1"}
                event={
                  selectCoin?.data.warning === "1"
                    ? () =>
                        updateCoinWarning({
                          value: 0,
                          coin_name: coinName + "_KRW",
                        })
                    : () =>
                        updateCoinWarning({
                          value: 1,
                          coin_name: coinName + "_KRW",
                        })
                }
              />
            }
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
        <div
          id="chart_section"
          className="w-full"
          onWheel={() => (window.document.body.style.overflow = "hidden")}
          onMouseLeave={() => (window.document.body.style.overflow = "auto")}
        >
          <DetailCard />
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
