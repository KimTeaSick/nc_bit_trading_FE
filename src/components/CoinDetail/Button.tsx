import { FC } from "react";
import { CoinDetailButton } from "./CoinDetailStyled";
import { useDispatch, useSelector } from "react-redux";
import { setChartTerm } from "@/module/coin";
import { RootStateType } from "@/module/rootReducer.d";
import { getChartData } from "@/pages/api/coinListAPIs";
interface ButtonProps {
  termText: "1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h";
}

const Button: FC<ButtonProps> = ({ termText }) => {
  const { detailCoin, chartTerm } = useSelector(
    (state: RootStateType) => state.coin
  );
  const dispatch = useDispatch<any>();
  const termEvent = () => {
    const body = {
      id: detailCoin,
      term: termText,
    };
    dispatch(getChartData(body));
  };
  return <CoinDetailButton onClick={termEvent}>{termText}</CoinDetailButton>;
};

export default Button;
