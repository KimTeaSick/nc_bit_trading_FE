import { FC, useCallback, useEffect, useState } from "react";
import ChoiceCondition from "./ChoiceCondition";
import {
  CoinSearch,
  ConditionEdit,
  ConditionRegister,
  conditionDelete,
  getConditionList,
  setUseCondition,
} from "@/pages/api/searchAPIs";
import { useDispatch, useSelector } from "react-redux";
import {
  setConditionDetailRollBack,
  setResultDataRollback,
} from "@/module/search";
import ConditionIndex from "./components/conditionIndex";
import { BTN_EVENT_TYPE } from "@/@types/Search";
import { RootStateType } from "@/module/rootReducer.d";

const SearchPage: FC = () => {
  const dispatch = useDispatch();
  const [stage, setStage] = useState(0);
  const [conditionList, setConditionList] = useState<string[]>(); // 검색에 사용된 컨디션
  const searchSlice = useSelector((state: RootStateType) => state.search);

  const conditionListSetter = useCallback(async () => {
    const list = await getConditionList();
    setConditionList(list);
  }, []);

  const clickRegister = () => {
    dispatch(setConditionDetailRollBack());
    setStage(1);
  };

  const btnEvent = useCallback(
    async (type: string, body?: any, name?: string) => {
      const BTN_EVENT: BTN_EVENT_TYPE = {
        registerCondition: async () =>
          await ConditionRegister({ Name: name, ...body }),
        editCondition: async () =>
          await ConditionEdit(Object.keys(searchSlice.conditionDetail), body),
        useCondition: async () =>
          await setUseCondition(Object.keys(searchSlice.conditionDetail)),
        deleteCondition: async () =>
          await conditionDelete(Object.keys(searchSlice.conditionDetail)),
      };
      BTN_EVENT[`${type}`]();
      await conditionListSetter();
      setStage(0);
    },
    [conditionListSetter, searchSlice]
  );

  useEffect(() => {
    conditionListSetter();
    dispatch(setResultDataRollback());
  }, [conditionListSetter, dispatch, stage]);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="mb-4 mt-5 flex flex-row justify-between px-4 md:flex-row md:items-center">
        <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
          조건 등록
        </h4>
      </div>
      {stage === 0 ? (
        <ChoiceCondition
          tableData={conditionList}
          registerBtnEvent={() => clickRegister()}
          setStage={setStage}
        />
      ) : (
        <ConditionIndex
          searchSlice={searchSlice}
          btnEvent={btnEvent}
          setStage={setStage}
        />
      )}
    </div>
  );
};

export default SearchPage;
