import { PossessionCoinType } from "@/@types/Dash";
import { FC, useState } from "react";

const POSSESSION_ITEM = [
  "NO.",
  "종목명",
  "보유수량",
  "매입가",
  "현재가",
  "매입금액",
  "평가금액",
  "평가순익",
  "수익률",
];

interface PossessionProps {
  possessionCoin: PossessionCoinType[] | 333;
}

const Possession: FC<PossessionProps> = ({ possessionCoin }) => {
  console.log("possessionCoin ::::::::::::::::", possessionCoin);

  return (
    <>
      <p>보유종목</p>
      <div className="possessionWrapper">
        <div className="possessionItemWrapper">
          {POSSESSION_ITEM.map((item, index) => (
            <div className="title" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="possessionItemWrapper">
          {possessionCoin !== 333 ? (
            possessionCoin?.map((coin, index) => (
              <>
                <div key={index}>{index + 1}</div>
                <div key={index}>{coin.coin}</div>
                <div>{coin.info.unit}</div>
                <div>{Number(coin.info.buy_price).toFixed(2)} 원</div>
                <div>{Number(coin.info.now_price).toFixed(2)} 원</div>
                <div>{Number(coin.info.buy_total_price).toFixed(2)} 원</div>
                <div>{Number(coin.info.evaluate_price).toFixed(2)} 원</div>
                <div>{Number(coin.info.profit).toFixed(2)} 원</div>
                <div>{Number(coin.info.rate).toFixed(2)} %</div>
              </>
            ))
          ) : (
            <div>asd</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Possession;
