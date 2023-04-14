import { getCoinList } from "@/pages/api/coinListAPIs";
import { FC, useCallback, useEffect, useState } from "react";
import * as CL from "./CoinListStyled";
import CoinCard from "./CoinCard";
import { CoinType } from "@/@types/CoinList";

const CoinListWapper: FC = () => {
  const [coinList, setCoinList] = useState<CoinType[]>([]);

  const coin = useCallback(async () => {
    const { data } = await getCoinList();
    setCoinList(Object.entries(data));
  }, []);

  useEffect(() => {
    coin();
  }, [coin]);

  return (
    <div>
      <CL.CoinListWapper>
        {coinList.map((coin: CoinType, index: number) =>
          coin[0] === "date" ? (
            <div key={index} />
          ) : (
            <CoinCard key={index} coin={coin} />
          )
        )}
      </CL.CoinListWapper>
    </div>
  );
};

export default CoinListWapper;
