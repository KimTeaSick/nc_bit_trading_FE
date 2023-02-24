import React from "react";
import { DetailCoinType } from "@/@types/CoinList";
import ButtonSection from "./ButtonSection";
import * as CD from "./CoinDetailStyled";
import Loading from "../common/Loading";
import dynamic from "next/dynamic";
import { FC } from "react";
import Chart from "../Chart";

interface CoinDetailPageProps {
  selectCoin?: DetailCoinType;
  coinName?: string | string[];
  data: any;
}

const CoinDetailPage: FC<CoinDetailPageProps> = ({
  selectCoin,
  coinName,
  data,
}) => {
  return (
    <>
      <CD.CoinDetailTopSection>
        <p>{coinName}</p>
        <div>
          <div>금일 최고가 : {selectCoin?.data?.max_price} 원</div>
          <div>금일 최저가 : {selectCoin?.data?.min_price} 원</div>
        </div>
      </CD.CoinDetailTopSection>
      <div>
        {data !== undefined ? (
          <>
            <Chart />
            <ButtonSection />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default CoinDetailPage;
