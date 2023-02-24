import { CoinType } from "@/@types/CoinList";
import Link from "next/link";
import { FC } from "react";
import * as CL from "./CoinListStyled";

interface CoinCardProps {
  coin: CoinType;
}

const CoinCard: FC<CoinCardProps> = ({ coin }) => {
  return (
    <Link href={`coin/${coin[0]}`}>
      <CL.CoinCard>
        <div>{coin[0]}</div>
        <div>{coin[1].max_price} 원</div>
      </CL.CoinCard>
    </Link>
  );
};

export default CoinCard;
