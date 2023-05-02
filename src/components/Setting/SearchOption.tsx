import { Input } from "@/components/common/input/index";
import { RootStateType } from "@/module/rootReducer.d";
import { SearchOptionType } from "@/module/setting/setting";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import Selection from "../common/select/SelectBox";
import SettingButton from "./SettingButton";
import SearchContent from "./SearchContent";
import { SearchSection } from "./Setting.styled";
import SearchOptionList from "./SearchOptionList";
import {
  useDisparityLineQuery,
  searchOptionInsert,
  searchOptionUpdate,
  useSearchOption,
} from "@/pages/api/settingAPI";

const SearchOption = () => {
  const request = useDisparityLineQuery();
  const [event, updateEvent] = useReducer(
    (prev: any, next: any) => {
      return { ...prev, ...next };
    },
    {
      idx: 0,
      name: "",
      price: "",
      trends_idx: "",
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

  const optionInsertEvent = () => {
    searchOptionInsert(event);
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
    <SearchSection>
      <div className="left">
        <SearchContent>
          <p>검색 조건 이름</p>
          <div className="phrase">
            이름 :
            <Input
              value={event.name}
              type={"text"}
              width={120}
              onChange={(e) => updateEvent({ name: e.target.value })}
            />
          </div>
        </SearchContent>
        <SearchContent>
          <p>가격</p>
          <div className="phrase">
            가격이
            <Input
              value={event.price}
              type={"number"}
              width={60}
              onChange={(e) => updateEvent({ price: e.target.value })}
            />
            원 이상인 종목
          </div>
        </SearchContent>
        <SearchContent>
          <p>추세</p>
          <div className="phrase">
            <Selection
              width={120}
              value={event.trends_idx || 1}
              itemList={SELECT_ITEMS}
              event={(e) => updateEvent({ trends_idx: e.target.value })}
            />
            평균선 추세가
            <Input
              value={event.trends}
              type={"number"}
              width={60}
              onChange={(e) => updateEvent({ trends: e.target.value })}
            />
            번 이상 상승인 종목
          </div>
        </SearchContent>
        <SearchContent>
          <p>거래대금</p>
          <div className="phrase">
            거래대금이
            <Input
              value={event.transaction_amount}
              type={"number"}
              width={60}
              onChange={(e) =>
                updateEvent({ transaction_amount: e.target.value })
              }
            />
            원 이상인 종목
          </div>
        </SearchContent>
        <SearchContent>
          <p>평균거래량</p>
          <div className="phrase">
            평균거래량이
            <Input
              value={event.avg_volume}
              type={"number"}
              width={60}
              onChange={(e) => updateEvent({ avg_volume: e.target.value })}
            />
            이상인 종목
          </div>
        </SearchContent>
        <SearchContent>
          <p>이격도 범위</p>
          <div className="phrase">
            이격도의 범위가
            <Input
              value={event.first_disparity}
              type={"number"}
              width={60}
              onChange={(e) => updateEvent({ first_disparity: e.target.value })}
            />
            이상
            <Input
              value={event.second_disparity}
              type={"number"}
              width={60}
              onChange={(e) =>
                updateEvent({ second_disparity: e.target.value })
              }
            />
            이하인 종목
          </div>
        </SearchContent>
        <div style={{ display: "flex", gap: "10px" }}>
          <SettingButton
            active={second_disparity !== "" ? false : true}
            title={second_disparity !== "" ? "수정" : "사용"}
            event={
              second_disparity !== "" ? optionUpdateEvent : optionInsertEvent
            }
          />
          {second_disparity !== "" ? (
            <SettingButton
              active={second_disparity !== "" ? false : true}
              title={"사용"}
              event={useSearchOptionEvent}
            />
          ) : null}
        </div>
      </div>
      <div className="right">
        <SearchOptionList />
      </div>
    </SearchSection>
  );
};

export default SearchOption;
