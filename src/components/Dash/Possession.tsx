import { krwChage } from "@/lib/krwChage";
import { RootStateType } from "@/module/rootReducer.d";
import { sell, buy } from "@/pages/api/walletAPIs";
import { Input } from "@/styles/globalStyle";
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

const Possession: FC = () => {
  const [unit, setUnit] = useState<string>("");

  const { balance, coinList } = useSelector(
    (state: RootStateType) => state.wallet
  );

  const mathBalnce = Math.round(Number(balance));

  const sellButtonEvent = (coin: string, unit: string) => {
    if (unit === "") {
      alert("갯수를 입력해주세요");
      return;
    }
    const body = {
      coin: coin.slice(6, coin.length),
      unit: parseFloat(unit),
    };
    sell(body);
  };
  console.log("coinList", coinList);

  return (
    <>
      <p>보유종목</p>
      <div className="possessionWrapper">
        <div className="possessionItemWrapper">
          {POSSESSION_ITEM.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Possession;
