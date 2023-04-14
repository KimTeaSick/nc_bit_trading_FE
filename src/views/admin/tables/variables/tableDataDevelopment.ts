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
};

export const useTransactionHistory = () => {
  const { orderList } = useSelector((state: RootStateType) => state.trading);
  const tableData = orderList.map((value, index) => {
    return {
      number: index + 1,
      name: value.order_currency,
      Trading: value.type === "bid" ? "매도" : "매수",
      coinprice: value.contract[0].price,
      quantity: value.order_qty,
      price: value.contract[0].total,
      charge: value.contract[0].fee,
    };
  });
  return tableData;
};

const tableDataComplex: RowObj[] = [
  {
    number: "1",
    name: "Marketplace",
    Trading: "매도",
    coinprice: "21.3원",
    quantity: "50",
    price: "1,065원",
    charge: "2.66원",
  },
  {
    number: "1",
    name: "Marketplace",
    Trading: "매도",
    coinprice: "21.3원",
    quantity: "50",
    price: "1,065원",
    charge: "2.66원",
  },
  {
    number: "1",
    name: "Marketplace",
    Trading: "매도",
    coinprice: "21.3원",
    quantity: "50",
    price: "1,065원",
    charge: "2.66원",
  },
  {
    number: "1",
    name: "Marketplace",
    Trading: "매도",
    coinprice: "21.3원",
    quantity: "50",
    price: "1,065원",
    charge: "2.66원",
  },
  {
    number: "1",
    name: "Marketplace",
    Trading: "매도",
    coinprice: "21.3원",
    quantity: "50",
    price: "1,065원",
    charge: "2.66원",
  },
  {
    number: "1",
    name: "Marketplace",
    Trading: "매도",
    coinprice: "21.3원",
    quantity: "50",
    price: "1,065원",
    charge: "2.66원",
  },
];
export default tableDataComplex;
