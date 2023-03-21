import { RootStateType } from "@/module/rootReducer.d";
import { FC } from "react";
import { useSelector } from "react-redux";
import { krwChage } from "@/lib/krwChage";
import { PropertySection, CardSection, BackGroundImg } from "./Dash.styled";
import { CoinCard } from "../CoinList/CoinListStyled";
import Loading from "../common/Loading";
import Link from "next/link";
import IMG from "../../img/chart.jpg";

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
      <BackGroundImg img={IMG.src}>
        <PropertySection>
          <p>NC의 현재 보유 자산</p>
          <div>{krwChage(String(Math.round(Number(myProperty))))} ₩</div>
        </PropertySection>
      </BackGroundImg>
      <p>추천 종목</p>
      {isLoading ? (
        <Loading />
      ) : (
        <CardSection>
          <div className="cardWrapper">
            {recommendPrice?.map((coin, index) => (
              <Link href={`coin/${coin.coin}`} key={index}>
                <CoinCard>
                  <div>{coin.coin}</div>
                  {Math.round(coin.separation)}
                </CoinCard>
              </Link>
            ))}
          </div>
        </CardSection>
      )}
    </div>
  );
};

export default DashBoardPage;
