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

const COMPONENT_COVER_CLASS =
  "mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1";
const TITLE_SECTION_CLASS =
  "mb-4 mt-5 flex flex-row justify-between px-4 md:flex-row md:items-center";
const TITLE_CLASS = "ml-1 text-2xl font-bold text-navy-700 dark:text-white";

const SearchPage: FC = () => {
  const dispatch = useDispatch();
  const [stage, setStage] = useState(0);
  const [conditionList, setConditionList] = useState<string[]>(); // 검색에 사용된 컨디션
  const searchSlice = useSelector((state: RootStateType) => state.search);
  const { autoTradingStatus } = useSelector(
    (state: RootStateType) => state.common
  );
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
      if (autoTradingStatus) {
        alert(
          "자동매매 실행 중 조건을 변경 / 삭제 / 수정 / 등록 할 수 없습니다."
        );
        return;
      }
      const BTN_EVENT: BTN_EVENT_TYPE = {
        registerCondition: async () =>
          await ConditionRegister({ Name: name, ...body }),
        editCondition: async () =>
          await ConditionEdit(Object.keys(searchSlice.conditionDetail), body),
        useCondition: async () =>
          await setUseCondition(Object.values(searchSlice.conditionDetail)),
        deleteCondition: async () =>
          await conditionDelete(Object.values(searchSlice.conditionDetail)),
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
    <div className={COMPONENT_COVER_CLASS}>
      <div className={TITLE_SECTION_CLASS}>
        <h4 className={TITLE_CLASS}>조건 등록</h4>
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
