import { krwChage } from "@/lib/krwChage";
import { OrderListType } from "@/module/trading/trading";
import { FC } from "react";
import { OrderList } from "./Trading.styled";

interface ListProps {
  data: OrderListType;
  index?: number;
}

const List: FC<ListProps> = ({ data, index }) => {
  return (
    <OrderList>
      <div>{index}</div>
      <div>{data.order_currency}</div>
      <div>{data.type === "bid" ? "매수" : "매도"}</div>
      <div>{krwChage(data.contract[0].price)} 원</div>
      <div>{data.order_qty}</div>
      <div>{krwChage(data.contract[0].total)} 원</div>
      <div>{data.contract[0].fee} 원</div>
    </OrderList>
  );
};

interface ListTitleProps {
  data: string[];
}

export const ListTitle: FC<ListTitleProps> = ({ data }) => {
  return (
    <OrderList>
      {data.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </OrderList>
  );
};

export default List;
