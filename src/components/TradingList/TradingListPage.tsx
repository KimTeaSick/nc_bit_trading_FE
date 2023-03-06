import { RootStateType } from "@/module/rootReducer.d";
import { getOrderList } from "@/pages/api/tradingList";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../common/Loading";
import PaginNation from "../common/PaginNation";
import List, { ListTitle } from "./List";
import { ListSection, LIST_VALUE } from "./Trading.styled";

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
