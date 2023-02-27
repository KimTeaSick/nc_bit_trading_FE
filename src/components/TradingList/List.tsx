import { krwChage } from "@/lib/krwChage";
import { OrderListType } from "@/module/trading/trading";
import { FC } from "react";
import { OrderList } from "./Trading.styled";

interface ListProps {
  data: OrderListType;
  index: number;
}

const List: FC<ListProps> = ({ data, index }) => {
  console.log("data", data);

  return (
    <OrderList>
      <div>{index}</div>
      <div>{data.order_currency}</div>
      <div>{data.type === "bid" ? "매수" : "매도"}</div>
      <div>{data.contract[0].price}</div>
      <div>{data.order_qty}</div>
      <div>{krwChage(data.contract[0].total)}원</div>
      <div>{data.contract[0].fee}</div>
    </OrderList>
  );
};

export default List;
