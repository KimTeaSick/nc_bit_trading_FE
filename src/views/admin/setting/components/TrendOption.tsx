import Card from "@/components/card";
import { EMPTY_SEARCH_OPTION } from "@/lib/const_val";
import { RootStateType } from "@/module/rootReducer.d";
import { setSearchOption } from "@/module/setting";
import { SearchOptionType } from "@/module/setting/setting";
import {
  searchOptionInsert,
  searchOptionUpdate,
  useDisparityLineQuery,
  useSearchOption,
  useSearchOptionListQuery,
} from "@/pages/api/settingAPI";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import SetTrend from "./SetTrend";
import Trend from "./Trend";
import TrendList from "./TrendList";

const TrendOption = () => {
  const [fixMode, setFixMode] = useState(false);
  // const request = useDisparityLineQuery();
  const request = useSearchOptionListQuery();
  const plusClickEvent = () => dispatch(setSearchOption(EMPTY_SEARCH_OPTION));
  const listClickEvent = (value: SearchOptionType) =>
    dispatch(setSearchOption(value));

  console.log(request.data);

  const [event, updateEvent] = useReducer(
    (prev: any, next: any) => {
      return { ...prev, ...next };
    },
    {
      idx: 0,
      name: "",
      price: "",
      trends_idx: "1",
      trends: "",
      avg_volume: "",
      first_disparity: "",
      second_disparity: "",
      transaction_amount: "",
    }
  );

  const {
    search_idx,
    search_name,
    price,
    trends,
    trends_idx,
    transaction_amount,
    avg_volume,
    first_disparity,
    second_disparity,
    line_one,
    line_two,
    line_three,
  } = useSelector((state: RootStateType) => state.setting);

  const SELECT_ITEMS = [line_one, line_two, line_three];

  useEffect(() => {
    updateEvent({
      idx: search_idx !== 0 ? search_idx : 0,
      name: search_name,
      price: price,
      trends_idx: trends_idx,
      trends: trends,
      avg_volume: transaction_amount,
      first_disparity: avg_volume,
      second_disparity: first_disparity,
      transaction_amount: second_disparity,
    });
  }, [
    search_idx,
    search_name,
    price,
    trends_idx,
    trends,
    transaction_amount,
    avg_volume,
    first_disparity,
    second_disparity,
  ]);

  const optionInsertEvent = async () => {
    console.log("insert data", event);

    await searchOptionInsert(event);
    alert("설정이 등록되었습니다.");
  };

  const optionUpdateEvent = () => {
    searchOptionUpdate(event);
    alert("설정이 수정되었습니다.");
  };

  const useSearchOptionEvent = () => {
    useSearchOption({ num: event.idx });
    alert("설정이 변경되었습니다.");
  };

  return (
    <>
      <SetTrend
        optionInsertEvent={optionInsertEvent}
        optionUpdateEvent={optionUpdateEvent}
        useSearchOptionEvent={useSearchOptionEvent}
        SELECT_ITEMS={SELECT_ITEMS}
        updateEvent={updateEvent}
        event={event}
      >
        <TrendList list={request.data} />
      </SetTrend>
    </>
  );
};

export default TrendOption;

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
