import { RootStateType } from "@/module/rootReducer.d";
import { useSelector } from "react-redux";

type RowObj = {
  number: string;
  name: string;
  Trading: string;
  coinprice: string;
  quantity: string;
  price: string;
  charge: string;
  date: string;
};

export const useTransactionHistory = () => {
  const { orderList } = useSelector((state: RootStateType) => state.trading);
  const tableData = orderList.map((value, index) => {
    return {
      coin_name: value.coin_name,
      unit: value.unit,
      price: value.price,
      total_price: value.total_price,
      fee: value.fee,
      type: value.type === "bid" ? "매도" : "매수",
      date: value.date.slice(0, 19),
    };
  });
  return tableData;
};
