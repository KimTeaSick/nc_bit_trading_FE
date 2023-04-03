import { PossessionCoinType } from "@/@types/Dash";
import { RootStateType } from "@/module/rootReducer.d";
import { isArray } from "@amcharts/amcharts5/.internal/core/util/Type";
import { FC, useState } from "react";
import { useSelector } from "react-redux";

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
  possessionCoin?: PossessionCoinType[] | 333;
}

const Possession: FC<PossessionProps> = () => {
  const { possessionCoin } = useSelector((state: RootStateType) => state.dash);

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
          {Array.isArray(possessionCoin)
            ? possessionCoin.map((coin, index) => (
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
            : null}
        </div>
      </div>
    </>
  );
};

export default Possession;
