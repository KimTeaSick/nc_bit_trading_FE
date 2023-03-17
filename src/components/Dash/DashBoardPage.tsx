import { RootStateType } from "@/module/rootReducer.d";
import { FC } from "react";
import { useSelector } from "react-redux";
import { krwChage } from "@/lib/krwChage";
import { PropertySection } from "./Dash.styled";
import { CoinCard } from "../CoinList/CoinListStyled";
import Loading from "../common/Loading";
import Link from "next/link";

interface DashBoardPageProps {
  recommendPrice: any[];
  isLoading: boolean;
}

const DashBoardPage: FC<DashBoardPageProps> = ({
  recommendPrice,
  isLoading,
}) => {
  const { myProperty } = useSelector((state: RootStateType) => state.wallet);
  console.log("recommendPrice", recommendPrice);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p>DashBoard</p>
          <PropertySection>
            {krwChage(String(Math.round(Number(myProperty))))} ₩
          </PropertySection>
          <div style={{ flexWrap: "wrap", display: "flex" }}>
            {recommendPrice?.map((coin, index) => (
              <Link href={`coin/${coin.coin}`} key={index}>
                <CoinCard>
                  <div>{coin.coin}</div>
                  {Math.round(coin.separation)}
                </CoinCard>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoardPage;
