import React from "react";
import { DetailCoinType } from "@/@types/CoinList";
import ButtonSection from "./ButtonSection";
import * as CD from "./CoinDetailStyled";
import { FC } from "react";
import Chart from "../Chart";
import { krwChage } from "@/lib/krwChage";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";

interface CoinDetailPageProps {
  selectCoin?: DetailCoinType;
  coinName?: string | string[];
  data: any;
}

const CoinDetailPage: FC<CoinDetailPageProps> = ({ selectCoin, coinName }) => {
  const { avg5DataTrend } = useSelector((state: RootStateType) => state.coin);
  return (
    <>
      <CD.CoinDetailTopSection>
        <p>{coinName}</p>
        <p>{avg5DataTrend ? "상승" : "하락"}</p>
        <div>
          <div>
            금일 최고가 : {krwChage(String(selectCoin?.data?.max_price))} 원
          </div>
          <div>
            금일 최저가 : {krwChage(String(selectCoin?.data?.min_price))} 원
          </div>
        </div>
      </CD.CoinDetailTopSection>
      <div>
        <>
          <Chart />
          <ButtonSection />
        </>
      </div>
    </>
  );
};

export default CoinDetailPage;
