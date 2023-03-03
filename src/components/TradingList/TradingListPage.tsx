import { RootStateType } from "@/module/rootReducer.d";
import { getOrderList } from "@/pages/api/tradingList";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginNation from "../common/PaginNation";
import List, { ListTitle } from "./List";
import { ListSection, LIST_VALUE } from "./Trading.styled";

const TradingPage: FC = () => {
  const dispatch = useDispatch<any>();
  const { orderList } = useSelector((state: RootStateType) => state.trading);
  useEffect(() => {
    dispatch(getOrderList({ page: "1" }));
  }, [dispatch]);

  return (
    <div>
      <p>TradingList</p>
      <ListSection>
        <ListTitle data={LIST_VALUE} />
        {orderList?.map((value, index) => (
          <List key={index} data={value} index={index + 1} />
        ))}
        <PaginNation />
      </ListSection>
    </div>
  );
};

export default TradingPage;
