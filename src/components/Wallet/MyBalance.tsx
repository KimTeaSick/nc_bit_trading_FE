import { RootStateType } from "@/module/rootReducer.d";
import { sell, buy } from "@/pages/api/walletAPIs";
import { FC } from "react";
import { useSelector } from "react-redux";
import { CoinList, SellButton } from "./WalletStyled";

const MyBalance: FC = () => {
  const { balance, coinList } = useSelector(
    (state: RootStateType) => state.wallet
  );

  console.log(coinList);
  const sellButtonEvent = (coin: string, unit: string) => {
    const body = {
      coin: coin.slice(6, coin.length),
      unit: parseFloat(unit),
    };
    sell(body);
  };
  return (
    <>
      <div>예수금 : {balance}</div>
      <div>
        보유 코인 :
        {coinList.map((value: any, index: number) => (
          <CoinList key={index}>
            <div>{coinList[index + 1]}</div>
            <SellButton
              onClick={() =>
                sellButtonEvent(coinList[index + 1][0], coinList[index + 1][1])
              }
            >
              매도
            </SellButton>
          </CoinList>
        ))}
      </div>
    </>
  );
};

export default MyBalance;
