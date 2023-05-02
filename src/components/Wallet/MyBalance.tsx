import { krwChage } from "@/lib/krwChage";
import { RootStateType } from "@/module/rootReducer.d";
import { sell, buy } from "@/pages/api/walletAPIs";
import { Input } from "@/components/common/input/index";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { CoinList, SellButton } from "./WalletStyled";

const MyBalance: FC = () => {
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

  return (
    <>
      <div>예수금 : {krwChage(String(mathBalnce))}</div>
      <div>
        보유 코인 :
        {coinList?.map((value: any, index: number) => (
          <CoinList key={index}>
            <div>{value[0]}</div>
            <div>{Number(value[1]).toFixed(4)}</div>
            <Input
              width={70}
              type={"number"}
              placeholder="0"
              onChange={(e) => setUnit(e.target.value)}
            />
            <SellButton onClick={() => sellButtonEvent(value[0], unit)}>
              매도
            </SellButton>
          </CoinList>
        ))}
      </div>
    </>
  );
};

export default MyBalance;
