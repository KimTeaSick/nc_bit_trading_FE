import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Input } from "../common/input";
import * as Type from "./ConditionType";
import { CoinSearch } from "@/pages/api/searchAPIs";

import SelectBox, {
  CHART_TERM,
  COMPARISON,
  TREND_TYPE,
  UP_DOWN,
} from "./SelectBox";
import CheckTable from "./CheckTable";
import LineChart from "../charts/LineChart";

interface ConditionProps {
  state: any;
  tableData: Type.TableDataType[];
  setStateAction: Dispatch<SetStateAction<any>>;
}

const Price: FC<ConditionProps> = ({ state, setStateAction, tableData }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.PriceType, next: Type.PriceType) => {
      return { ...prev, ...next };
    },
    {
      flag: "1",
      low_price: "0",
      high_price: "0",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, Price: condition });
  }, [condition]);

  return (
    // <div className="w-5/6 bg-navy-200 rounded-md p-5">
    <div>
      <div className=" font-bold mb-2">가격</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-xl">
          <div>24시간 종가가</div>
          <Input
            width={50}
            value={condition.low_price}
            onClick={() => setCondition({ ...condition, low_price: "" })}
            onChange={(e) =>
              setCondition({ ...condition, low_price: e.target.value })
            }
          />
          <div> 원 이상</div>
          <Input
            width={50}
            value={condition.high_price}
            onClick={() => setCondition({ ...condition, high_price: "" })}
            onChange={(e) =>
              setCondition({ ...condition, high_price: e.target.value })
            }
          />
          <div> 원 이하인 종목</div>
        </div>
        <div className="flex justify-end pr-3 w-16">
          <SearchButton event={() => setShow(!resultShow)} />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        {resultShow && (
          <>
            <CheckTable title="가격" tableData={tableData} />
            <LineChart />
          </>
        )}
      </div>
    </div>
  );
};

const TransactionAmount: FC<ConditionProps> = ({
  state,
  setStateAction,
  tableData,
}) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.TransactionAmount, next: Type.TransactionAmount) => {
      return { ...prev, ...next };
    },
    {
      flag: "1",
      low_transaction_amount: "0",
      high_transaction_amount: "0",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, TransactionAmount: condition });
  }, [condition]);

  return (
    // <div className="w-5/6 bg-navy-200 rounded-md p-5">
    <div>
      <div className=" font-bold mb-2">가격 대금</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-xl">
          <div>24시간 거래 대금이</div>
          <Input
            width={50}
            value={condition.low_transaction_amount}
            onClick={() =>
              setCondition({ ...condition, low_transaction_amount: "" })
            }
            onChange={(e) =>
              setCondition({
                ...condition,
                low_transaction_amount: e.target.value,
              })
            }
          />
          <div> 원 이상</div>
          <Input
            width={50}
            value={condition.high_transaction_amount}
            onClick={() =>
              setCondition({ ...condition, high_transaction_amount: "" })
            }
            onChange={(e) =>
              setCondition({
                ...condition,
                high_transaction_amount: e.target.value,
              })
            }
          />
          <div> 원 이하인 종목</div>
        </div>
        <div className="flex justify-end w-16 pr-3">
          <SearchButton event={() => setShow(!resultShow)} />
        </div>
      </div>
      <div className="mt-2">
        {resultShow && (
          <>
            <CheckTable title="거래 대금" tableData={tableData} />
            <LineChart />
          </>
        )}
      </div>
    </div>
  );
};

const MASP: FC<ConditionProps> = ({ state, setStateAction, tableData }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.MASPType, next: Type.MASPType) => {
      return { ...prev, ...next };
    },
    {
      flag: "1",
      chart_term: "1m",
      first_disparity: "0",
      comparison: ">=",
      second_disparity: "0",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, MASP: condition });
  }, [condition]);

  return (
    // <div className="w-5/6 bg-navy-200 rounded-md p-5">
    <div>
      <div className=" font-bold mb-2">이평선 비교</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-xl">
          <SelectBox
            width={80}
            itemList={CHART_TERM}
            event={(value) => setCondition({ ...condition, chart_term: value })}
          />
          <div>차트기준</div>
          <Input
            width={50}
            value={condition.first_disparity}
            onClick={() => setCondition({ ...condition, first_disparity: "" })}
            onChange={(e) =>
              setCondition({ ...condition, first_disparity: e.target.value })
            }
          />
          <div>이평선</div>
          <SelectBox
            width={80}
            itemList={COMPARISON}
            event={(value) => setCondition({ ...condition, comparison: value })}
          />
          <Input
            width={50}
            value={condition.second_disparity}
            onClick={() => setCondition({ ...condition, second_disparity: "" })}
            onChange={(e) =>
              setCondition({ ...condition, second_disparity: e.target.value })
            }
          />
          <div>이평선 </div>
        </div>
        <div className="flex w-16 justify-end pr-3">
          <SearchButton event={() => setShow(!resultShow)} />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        {resultShow && (
          <>
            <CheckTable title="이평선 비교" tableData={tableData} />
            <LineChart />
          </>
        )}
      </div>
    </div>
  );
};

const MACD: FC<ConditionProps> = ({ state, setStateAction, tableData }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.MACDType, next: Type.MACDType) => {
      return { ...prev, ...next };
    },
    {
      flag: "1",
      chart_term: "1m",
      short_disparity: "12",
      long_disparity: "24",
      up_down: "이하",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, Disparity: condition });
  }, [condition]);

  return (
    // <div className="w-5/6 bg-navy-200 rounded-md p-5">
    <div>
      <div className=" font-bold mb-2">MACD</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-xl">
          <SelectBox
            width={80}
            itemList={CHART_TERM}
            event={(value) => setCondition({ ...condition, chart_term: value })}
          />
          <div>차트기준</div>
          <div>단기 이평</div>
          <Input
            width={50}
            value={condition.short_disparity}
            onClick={() => setCondition({ ...condition, short_disparity: "" })}
            onChange={(e) =>
              setCondition({ ...condition, short_disparity: e.target.value })
            }
          />
          <div>장기 이평</div>
          <Input
            width={50}
            value={condition.long_disparity}
            onClick={() => setCondition({ ...condition, long_disparity: "" })}
            onChange={(e) =>
              setCondition({ ...condition, long_disparity: e.target.value })
            }
          />
          <div>MACD,</div>
          <div>0선</div>
          <SelectBox
            width={80}
            itemList={UP_DOWN}
            event={(value) => setCondition({ ...condition, up_down: value })}
          />
        </div>
        <div className="flex justify-end pr-3 w-16">
          <SearchButton event={() => setShow(!resultShow)} />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        {resultShow && (
          <>
            <CheckTable title="MACD" tableData={tableData} />
            <LineChart />
          </>
        )}
      </div>
    </div>
  );
};

const Trend: FC<ConditionProps> = ({ state, setStateAction, tableData }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.TrendType, next: Type.TrendType) => {
      return { ...prev, ...next };
    },
    {
      flag: "1",
      chart_term: "1m",
      trend_term: "0",
      trend_type: "상승",
      trend_reverse: "",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, Trend: condition });
  }, [condition]);

  return (
    // <div className="w-5/6 bg-navy-200 rounded-md p-5">
    <div>
      <div className=" font-bold mb-2">추세</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-xl">
          <SelectBox
            width={80}
            itemList={CHART_TERM}
            event={(value) => setCondition({ ...condition, chart_term: value })}
          />
          <div>차트기준</div>
          <Input
            width={50}
            value={condition.trend_term}
            onClick={() => setCondition({ ...condition, trend_term: "" })}
            onChange={(e) =>
              setCondition({ ...condition, trend_term: e.target.value })
            }
          />
          <div>번 동안</div>
          <SelectBox
            itemList={TREND_TYPE(false)}
            width={80}
            event={(e) =>
              setCondition({ ...condition, trend_type: e.target.value })
            }
          />
          <div>추세,</div>
          <SelectBox
            itemList={TREND_TYPE(true)}
            width={100}
            event={(e) =>
              setCondition({ ...condition, trend_reverse: e.target.value })
            }
          />
          <div>반전</div>
        </div>
        <div className="flex justify-end pr-3 w-16">
          <SearchButton event={() => setShow(!resultShow)} />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        {resultShow && (
          <>
            <CheckTable title="추세" tableData={tableData} />
            <LineChart />
          </>
        )}
      </div>
    </div>
  );
};

const Disparity: FC<ConditionProps> = ({
  state,
  setStateAction,
  tableData,
}) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.DisparityType, next: Type.DisparityType) => {
      return { ...prev, ...next };
    },
    {
      flag: "1",
      chart_term: "1m",
      disparity_term: "0",
      low_disparity: "0",
      high_disparity: "100",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, Disparity: condition });
  }, [condition]);

  return (
    // <div className="w-5/6 bg-navy-200 rounded-md p-5">
    <div>
      <div className=" font-bold mb-2">추세</div>
      <div className="flex items-center gap-2 text-xl">
        <SelectBox
          width={80}
          itemList={CHART_TERM}
          event={(value) => setCondition({ ...condition, chart_term: value })}
        />
        <div>차트기준</div>
        <Input
          width={50}
          value={condition.disparity_term}
          onClick={() => setCondition({ ...condition, disparity_term: "" })}
          onChange={(e) =>
            setCondition({ ...condition, disparity_term: e.target.value })
          }
        />
        <div>이평 이격도가</div>
        <Input
          width={50}
          value={condition.low_disparity}
          onClick={() => setCondition({ ...condition, low_disparity: "" })}
          onChange={(e) =>
            setCondition({ ...condition, low_disparity: e.target.value })
          }
        />
        <div>이상</div>
        <Input
          width={50}
          value={condition.high_disparity}
          onClick={() => setCondition({ ...condition, high_disparity: "" })}
          onChange={(e) =>
            setCondition({ ...condition, high_disparity: e.target.value })
          }
        />
        <div>이하</div>
      </div>
      <div className="flex justify-end pr-3">
        <SearchButton event={() => setShow(!resultShow)} />
      </div>
      <div className="mt-2 flex flex-col gap-2">
        {resultShow && (
          <>
            <CheckTable title="이격도" tableData={tableData} />
            <LineChart />
          </>
        )}
      </div>
    </div>
  );
};

interface Props {
  title?: string;
  event: () => any;
}

const SearchButton: FC<Props> = ({ event, title }) => {
  return (
    <div
      className="rounded-lg bg-blueSecondary w-full p-2 text-center font-bold text-white cursor-pointer"
      onClick={event}
    >
      {title ? title : "결과 보기"}
    </div>
  );
};

export { Price, TransactionAmount, MASP, MACD, Trend, Disparity, SearchButton };
