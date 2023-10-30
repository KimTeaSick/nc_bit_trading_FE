import { FC } from "react";
import { CoinDetailButton } from "./CoinDetailStyled";
import { useDispatch, useSelector } from "react-redux";
import { setChartTerm } from "@/module/coin";
import { RootStateType } from "@/module/rootReducer.d";
import { getChartData } from "@/pages/api/coinListAPIs";
interface ButtonProps {
  termText: "1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h";
  active: boolean;
}

const Button: FC<ButtonProps> = ({ termText, active }) => {
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
    dispatch(setChartTerm(termText));
  };
  return (
    <CoinDetailButton
      className="dark:!bg-navy-400 dark:border-gary-400 "
      onClick={termEvent}
      active={active}
    >
      {termText}
    </CoinDetailButton>
  );
};

export default Button;

export const CountButton = () => {
  const count = [
    { key: "10%", value: 10 },
    { key: "25%", value: 25 },
    { key: "50%", value: 50 },
    { key: "100%", value: 100 },
  ];
  return (
    <div className="flex gep-2 justify-between">
      {count.map((value, index) => (
        <div
          className="rounded-sm w-[23%] p-2 flex justify-center border-2"
          key={index}
        >
          {value.key}
        </div>
      ))}
    </div>
  );
};
