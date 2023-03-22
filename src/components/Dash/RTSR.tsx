//real time search result

import { FC } from "react";
import { RTSRWrapper } from "./Dash.styled";

interface RTSRProps {
  reccomandItem: any[];
}

const RTSR_ITEM = [
  "종목명",
  "전일종가",
  "시가",
  "종가",
  "고가",
  "저가",
  "24시간 거래량",
  "변동가",
  "변동률",
];

const RTSR: FC<RTSRProps> = ({ reccomandItem }) => {
  return (
    <RTSRWrapper>
      <div className="RTSRItemWrapper">
        {RTSR_ITEM.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className="RTSRList">
        {reccomandItem.map((item, index) => (
          <div className="RTSRItemWrapper" key={index}>
            <div>{item.coin.coin}</div>
            <div>{item.coin.data.prev_closing_price}</div>
            <div>{item.coin.data.opening_price}</div>
            <div>{item.coin.data.closing_price}</div>
            <div>{item.coin.data.max_price}</div>
            <div>{item.coin.data.min_price}</div>
            <div>{Number(item.coin.data.units_traded_24H).toFixed(3)}</div>
            <div>{item.coin.data.fluctate_24H}원</div>
            <div>{item.coin.data.fluctate_rate_24H}%</div>
          </div>
        ))}
      </div>
    </RTSRWrapper>
  );
};
export default RTSR;
