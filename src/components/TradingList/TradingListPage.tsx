import { FC, useEffect, useState } from "react";
import { RootStateType } from "@/module/rootReducer.d";
import { getOrderList } from "@/pages/api/tradingList";
import { useDispatch, useSelector } from "react-redux";
import { ListSection, LIST_VALUE } from "./Trading.styled";
import CustomCalendar from "../common/CustomCalendar";
import PaginNation from "../common/PaginNation";
import List, { ListTitle } from "./List";
import Loading from "../common/Loading";

const TradingPage: FC = () => {
  const dispatch = useDispatch<any>();
  const [nowPage, setNowPage] = useState(1);
  const { orderList, orderListPage, orderListStatus } = useSelector(
    (state: RootStateType) => state.trading
  );

  useEffect(() => {
    dispatch(getOrderList({ page: nowPage }));
  }, [dispatch, nowPage]);

  return (
    <div>
      <p>TradingList</p>
      {orderListStatus === "Loading" ? (
        <Loading />
      ) : (
        <ListSection>
          <CustomCalendar />
          <ListTitle data={LIST_VALUE} />
          {orderList?.map((value, index) => (
            <List key={index} data={value} index={index + 1} />
          ))}
          <PaginNation page={orderListPage} setNowPage={setNowPage} />
        </ListSection>
      )}
    </div>
  );
};

export default TradingPage;
