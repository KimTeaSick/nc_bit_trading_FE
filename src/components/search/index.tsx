import { Dispatch, FC, useCallback, useEffect, useState } from "react";
import * as C from "./Condition";
import {
  CoinSearch,
  ConditionEdit,
  ConditionRegister,
  conditionDelete,
  getConditionList,
  setUseCondition,
} from "@/pages/api/searchAPIs";
import { Input } from "../common/input";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import {
  setCondiotionList,
  setConditionDetailRollBack,
  setResultDataRollback,
  setSearchResultData,
} from "@/module/search";
import ChoiceCondition from "./ChoiceCondition";
import CheckTable from "./CheckTable";
import Card from "../card";
import IMG_URL from "@/assets/img/search/bitcoin.png";

const SearchPage: FC = () => {
  const dispatch = useDispatch<any>();
  const searchResult = useSelector((state: RootStateType) => state.search);
  const [ch, setch] = useState(0);
  const [name, setName] = useState("");
  const [searchCondiotion, setSearchCondiotion] = useState<any>();

  const searchBtnEvent = useCallback(async () => {
    const data = await CoinSearch(searchCondiotion);
    dispatch(setSearchResultData(data));
  }, [dispatch, searchCondiotion]);

  const conditionListSetter = useCallback(async () => {
    const list = await getConditionList();
    dispatch(setCondiotionList(list));
  }, [dispatch, ch]);

  useEffect((): any => {
    conditionListSetter();
    if (ch === 0) {
      setName("");
      dispatch(setResultDataRollback());
    }
    return () => dispatch(setResultDataRollback());
  }, [dispatch, conditionListSetter, ch, setch]);

  useEffect(() => {
    const madeCondition =
      searchResult.conditionDetail !== null
        ? Object.values(searchResult.conditionDetail)
        : null;
    const initialCondition =
      madeCondition !== null
        ? madeCondition[0]
        : {
            Price: {
              low_price: "0",
              high_price: "0",
            },
            TransactionAmount: {
              low_transaction_amount: "0",
              high_transaction_amount: "0",
            },
            MASP: {
              chart_term: "1m",
              first_disparity: "0",
              comparison: ">=",
              second_disparity: "0",
            },
            Disparity: {
              chart_term: "1m",
              disparity_term: "12",
              low_disparity: "0",
              high_disparity: "100",
            },
            Trend: {
              chart_term: "1m",
              MASP: "5",
              trend_term: "0",
              trend_type: "상승",
              trend_reverse: "1",
            },
            MACD: {
              chart_term: "1m",
              short_disparity: "12",
              long_disparity: "24",
              up_down: "이하",
            },
          };
    setSearchCondiotion(initialCondition);
  }, [searchResult.conditionDetail]);

  const registerBtnClick = () => {
    dispatch(setConditionDetailRollBack());
    setch(1);
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="mb-4 mt-5 flex flex-row justify-between px-4 md:flex-row md:items-center">
        <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
          조건 등록
        </h4>
      </div>
      {ch === 0 ? (
        <>
          <ChoiceCondition
            tableData={searchResult.conditionList}
            registerBtnEvent={registerBtnClick}
            setch={setch}
          />
        </>
      ) : (
        <Card extra="p-3 shadow-3xl">
          <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
            <div className="z-20 flex flex-col gap-2 justify-center items-center">
              <C.Price
                conditionData={
                  searchResult.conditionDetail !== null
                    ? Object.values(searchResult.conditionDetail)
                    : null
                }
                data={searchResult.priceSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.TransactionAmount
                conditionData={
                  searchResult.conditionDetail !== null
                    ? Object.values(searchResult.conditionDetail)
                    : null
                }
                data={searchResult.transactionAmountSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.MASP
                conditionData={
                  searchResult.conditionDetail !== null
                    ? Object.values(searchResult.conditionDetail)
                    : null
                }
                data={searchResult.MASPSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.Trend
                conditionData={
                  searchResult.conditionDetail !== null
                    ? Object.values(searchResult.conditionDetail)
                    : null
                }
                data={searchResult.trendSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.Disparity
                conditionData={
                  searchResult.conditionDetail !== null
                    ? Object.values(searchResult.conditionDetail)
                    : null
                }
                data={searchResult.disparitySearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.MACD
                conditionData={
                  searchResult.conditionDetail !== null
                    ? Object.values(searchResult.conditionDetail)
                    : null
                }
                data={searchResult.MACDSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />

              {searchResult.recommends &&
                searchResult.recommends.length !== 0 && (
                  <div className="w-full bg-navy-50 rounded-md p-5 flex flex-col gap-2">
                    <CheckTable title="" tableData={searchResult.recommends} />
                  </div>
                )}
            </div>

            <div className="w-full flex justify-between items-center pt-2">
              <div className="w-full flex items-center">
                <img src={IMG_URL.src} className=" w-8 mr-3" />
                <div className="w-1/12 mr-5 font-bold text-lg">조건 이름 :</div>
                <div className="shadow-lg border-2">
                  <Input
                    width={400}
                    height={40}
                    value={
                      searchResult.conditionDetail !== null
                        ? Object.keys(searchResult.conditionDetail) + ""
                        : name
                    }
                    onChange={(e) => setName(e.target.value)}
                    placeholder="조건 이름을 등록해 주세요."
                  />
                </div>
              </div>

              <div className="w-1/4 flex  my-2 gap-1">
                <C.SearchButton title="검색" event={() => searchBtnEvent()} />
                <C.SearchButton
                  // disable={name.length === 0 ? true : false}
                  title={
                    searchResult.conditionDetail !== null ? "수정" : "등록"
                  }
                  event={
                    searchResult.conditionDetail !== null
                      ? () =>
                          ConditionEdit(
                            Object.keys(searchResult.conditionDetail),
                            searchCondiotion
                          ).then(() => setch(0))
                      : () =>
                          ConditionRegister({
                            Name: name,
                            ...searchCondiotion,
                          }).then(() => setch(0))
                  }
                />
                {searchResult.conditionDetail !== null ? (
                  <>
                    <C.SearchButton
                      title="사용"
                      event={() => {
                        setUseCondition(
                          Object.keys(searchResult.conditionDetail)
                        );
                        setch(0);
                      }}
                    />
                    <C.SearchButton
                      title="삭제"
                      event={() => {
                        conditionDelete(
                          Object.keys(searchResult.conditionDetail)
                        );
                        setch(0);
                      }}
                    />
                  </>
                ) : null}
                <C.SearchButton
                  title="뒤로"
                  event={() => {
                    setch(0);
                  }}
                />
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchPage;
