import { RootStateType } from "@/module/rootReducer.d";
import { FC } from "react";
import { useSelector } from "react-redux";
import { krwChage } from "@/lib/krwChage";
import { PropertySection } from "./Dash.styled";
import { CoinCard } from "../CoinList/CoinListStyled";

const DashBoardPage: FC = () => {
  const { myProperty } = useSelector((state: RootStateType) => state.wallet);
  const { recommendPrice } = useSelector((state: RootStateType) => state.dash);
  return (
    <div>
      <p>DashBoard</p>
      <PropertySection>
        {krwChage(String(Math.round(Number(myProperty))))} ₩
      </PropertySection>
      <div style={{ flexWrap: "wrap", display: "flex" }}>
        {recommendPrice.map((coin, index) => (
          <CoinCard key={index}>{coin}</CoinCard>
        ))}
      </div>
    </div>
  );
};

export default DashBoardPage;
