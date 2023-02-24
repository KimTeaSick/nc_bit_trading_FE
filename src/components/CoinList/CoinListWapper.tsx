import { getCoinList } from "@/pages/api/coinListAPIs";
import { FC, useEffect, useState } from "react";
import * as CL from "./CoinListStyled";
import CoinCard from "./CoinCard";
import { CoinType } from "@/@types/CoinList";

const CoinListWapper: FC = () => {
  const [coinList, setCoinList] = useState<CoinType[]>([]);

  const coin = async () => {
    const { data } = await getCoinList();
    setCoinList(Object.entries(data));
  };

  useEffect(() => {
    coin();
  }, []);

  return (
    <div>
      <p>Coin List</p>
      <CL.CoinListWapper>
        {coinList.map((coin: CoinType, index: number) => (
          <CoinCard key={index} coin={coin} />
        ))}
      </CL.CoinListWapper>
    </div>
  );
};

export default CoinListWapper;
