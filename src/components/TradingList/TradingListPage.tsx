import { RootStateType } from "@/module/rootReducer.d";
import { getOrderList } from "@/pages/api/tradingList";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { ListSection } from "./Trading.styled";

const TradingPage: FC = () => {
  const dispatch = useDispatch<any>();
  const { orderList } = useSelector((state: RootStateType) => state.trading);
  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);

  return (
    <div>
      <p>TradingList</p>
      <ListSection>
        {orderList?.map((value, index) => (
          <List key={index} data={value} index={index + 1} />
        ))}
      </ListSection>
    </div>
  );
};

export default TradingPage;
