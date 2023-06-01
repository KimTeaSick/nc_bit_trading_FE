import { FC, useCallback, useEffect, useState } from "react";
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
import { PURE_CONDITION_STATUS } from "@/variables/pureConditionStatus";
import Image from "next/image";
import { BTN_EVENT_TYPE } from "@/@types/Search";

const SearchPage: FC = () => {
  const dispatch = useDispatch<any>();
  const searchResult = useSelector((state: RootStateType) => state.search);

  const [name, setName] = useState(""); // 이름
  const [stage, setStage] = useState(0);
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [conditionList, setConditionList] = useState<string[]>(); // 검색에 사용된 컨디션
  const [searchCondiotion, setSearchCondiotion] = useState<any>();
  const [useConditionList, setUseConditionList] = useState<string[]>(); // 검색에 사용된 컨디션

  const searchBtnEvent = useCallback(async () => {
    setLoading(true);
    const response = await CoinSearch(searchCondiotion);
    if (response === false) {
      setLoading(false);
      return;
    } else {
      dispatch(setSearchResultData(response.data));
      setUseConditionList(response.data.optionList);
      setLoading(false);
    }
  }, [dispatch, searchCondiotion]);

  const conditionListSetter = useCallback(async () => {
    const list = await getConditionList();
    setConditionList(list);
    // dispatch(setCondiotionList(list));
    console.log("list", list);
  }, []);

  const registerBtnClick = () => {
    dispatch(setConditionDetailRollBack());
    setStage(1);
  };

  const btnEvent = async (type: string) => {
    const BTN_EVENT: BTN_EVENT_TYPE = {
      registerCondition: async () => {
        await ConditionRegister({
          Name: name,
          ...searchCondiotion,
        });
      },
      editCondition: async () =>
        await ConditionEdit(
          Object.keys(searchResult.conditionDetail),
          searchCondiotion
        ),
      useCondition: async () => {
        await setUseCondition(Object.keys(searchResult.conditionDetail));
      },
      deleteCondition: async () => {
        await conditionDelete(Object.keys(searchResult.conditionDetail));
      },
    };
    BTN_EVENT[`${type}`]();
    await conditionListSetter();
    setStage(0);
  };

  useEffect(() => {
    const madeCondition =
      searchResult.conditionDetail !== null
        ? Object.values(searchResult.conditionDetail)
        : null;

    const initialCondition =
      madeCondition !== null ? madeCondition[0] : PURE_CONDITION_STATUS;
    setSearchCondiotion(initialCondition);
  }, [searchResult.conditionDetail]);

  useEffect(() => {
    const resetState = () => {
      setName("");
      dispatch(setResultDataRollback());
      setSearchCondiotion(PURE_CONDITION_STATUS);
      conditionListSetter();
    };
    conditionListSetter();
    setUseConditionList([]);
    if (stage === 0) {
      resetState();
    }
    return () => {
      resetState();
    };
  }, [dispatch, conditionListSetter, stage, setStage]);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="mb-4 mt-5 flex flex-row justify-between px-4 md:flex-row md:items-center">
        <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
          조건 등록
        </h4>
      </div>
      {stage === 0 ? (
        <>
          <ChoiceCondition
            tableData={conditionList}
            registerBtnEvent={registerBtnClick}
            setStage={setStage}
          />
        </>
      ) : (
        <Card extra="p-3 shadow-3xl">
          <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
            <div className="z-20 flex flex-col gap-2 justify-center items-center">
              <C.Price
                data={searchResult.priceSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.TransactionAmount
                data={searchResult.transactionAmountSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.MASP
                data={searchResult.MASPSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.Trend
                data={searchResult.trendSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.Disparity
                data={searchResult.disparitySearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              <C.MACD
                data={searchResult.MACDSearchCoin}
                state={searchCondiotion}
                setStateAction={setSearchCondiotion}
              />
              {searchResult.recommends &&
                searchResult.recommends.length !== 0 && (
                  <div className="w-full bg-navy-50 rounded-md p-5 flex flex-col gap-2">
                    <CheckTable
                      optionList={useConditionList}
                      tableData={searchResult.recommends}
                    />
                  </div>
                )}
            </div>

            <div className="w-full flex justify-between items-center pt-2">
              <div className="w-full flex items-center">
                <Image
                  src={IMG_URL.src}
                  className=" w-8 mr-3"
                  alt="coin"
                  width={20}
                  height={20}
                />
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

              <div className="w-1/3 flex my-2 gap-1">
                <C.SearchButton
                  title="검색"
                  event={() => searchBtnEvent()}
                  disable={loading}
                  loading={loading}
                />
                <C.SearchButton
                  // disable={name.length === 0 ? true : false}
                  title={
                    searchResult.conditionDetail !== null ? "수정" : "등록"
                  }
                  event={
                    searchResult.conditionDetail !== null
                      ? () => btnEvent("editCondition")
                      : () => btnEvent("registerCondition")
                  }
                />
                {searchResult.conditionDetail !== null && (
                  <>
                    <C.SearchButton
                      title="사용"
                      event={() => btnEvent("useCondition")}
                    />
                    <C.SearchButton
                      title="삭제"
                      event={() => btnEvent("deleteCondition")}
                    />
                  </>
                )}
                <C.SearchButton title="뒤로" event={() => setStage(0)} />
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchPage;
