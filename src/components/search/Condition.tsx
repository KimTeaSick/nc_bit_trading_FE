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
import IMG_URL from "@/assets/img/search/bitcoin.png";

import SelectBox, {
  CHART_TERM,
  COMPARISON,
  TREND_TYPE,
  UP_DOWN,
} from "./SelectBox";
import CheckTable from "./CheckTable";
import LineChart from "./Chart";

interface ConditionProps {
  conditionData: any;
  data?: any;
  state: any;
  setStateAction: Dispatch<SetStateAction<any>>;
}

const Price: FC<ConditionProps> = ({
  conditionData,
  data,
  state,
  setStateAction,
}) => {
  console.log("conditionData", conditionData);

  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.PriceType, next: Type.PriceType) => {
      return { ...prev, ...next };
    },
    {
      low_price:
        conditionData !== null ? conditionData[0].Price.low_price : "0",
      high_price:
        conditionData !== null ? conditionData[0].Price.high_price : "0",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, Price: condition });
  }, [condition]);
  console.log(data);

  return (
    <div className="w-full flex items-center">
      <img src={IMG_URL.src} className=" w-8 mr-3" />
      <div className="w-1/12 font-bold text-lg">가격 :</div>
      <div className="w-11/12 bg-navy-50 rounded-md p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
            <div>24시간 종가가</div>
            <Input
              width={150}
              value={condition.low_price}
              onClick={() => setCondition({ ...condition, low_price: "" })}
              onChange={(e) =>
                setCondition({ ...condition, low_price: e.target.value })
              }
            />
            <div> 원 이상</div>
            <Input
              width={150}
              value={condition.high_price}
              onClick={() => setCondition({ ...condition, high_price: "" })}
              onChange={(e) =>
                setCondition({ ...condition, high_price: e.target.value })
              }
            />
            <div> 원 이하인 종목</div>
          </div>
          {data && data.length !== 0 && (
            <div className="flex justify-end pr-3 w-16">
              <SearchButton event={() => setShow(!resultShow)} />
            </div>
          )}{" "}
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {resultShow && (
            <>
              <CheckTable title="가격" tableData={data} />
              {/* <LineChart data={data} /> */}
              {/* <div className="w-full overflow-y-auto h-72">{`${JSON.stringify(
              data
            )}`}</div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const TransactionAmount: FC<ConditionProps> = ({
  conditionData,
  data,
  state,
  setStateAction,
}) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.TransactionAmount, next: Type.TransactionAmount) => {
      return { ...prev, ...next };
    },
    {
      low_transaction_amount:
        conditionData !== null
          ? conditionData[0].TransactionAmount.low_transaction_amount
          : "0",
      high_transaction_amount:
        conditionData !== null
          ? conditionData[0].TransactionAmount.high_transaction_amount
          : "0",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, TransactionAmount: condition });
  }, [condition]);

  return (
    <div className="w-full flex items-center">
      <img src={IMG_URL.src} className=" w-8 mr-3" />
      <div className="w-1/12 font-bold text-lg">가격 대금 :</div>
      <div className="w-11/12 bg-navy-50 rounded-md p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
            <div>24시간 거래 대금이</div>
            <Input
              width={150}
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
              width={150}
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
          {data && data.length !== 0 && (
            <div className="flex justify-end w-16 pr-3">
              <SearchButton event={() => setShow(!resultShow)} />
            </div>
          )}
        </div>
        <div className="mt-2">
          {resultShow && (
            <>
              <CheckTable title="거래 대금" tableData={data} />
              {/* <LineChart data={data} /> */}
              {/* <div className="w-full overflow-y-auto h-72">{`${JSON.stringify(
              data
            )}`}</div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const MASP: FC<ConditionProps> = ({
  conditionData,
  data,
  state,
  setStateAction,
}) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.MASPType, next: Type.MASPType) => {
      return { ...prev, ...next };
    },
    {
      chart_term:
        conditionData !== null ? conditionData[0].MASP.chart_term : "1m",
      first_disparity:
        conditionData !== null ? conditionData[0].MASP.first_disparity : "0",
      comparison:
        conditionData !== null ? conditionData[0].MASP.comparison : ">=",
      second_disparity:
        conditionData !== null ? conditionData[0].MASP.second_disparity : "0",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, MASP: condition });
  }, [condition]);

  return (
    <div className="flex items-center w-full">
      <img src={IMG_URL.src} className=" w-8 mr-3" />
      <div className="w-1/12 font-bold text-lg">이평선 비교 :</div>
      <div className="w-11/12 bg-navy-50 rounded-md p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
            <SelectBox
              width={80}
              itemList={CHART_TERM}
              event={(e) =>
                setCondition({ ...condition, chart_term: e.target.value })
              }
            />
            <div>차트기준</div>
            <Input
              width={50}
              value={condition.first_disparity}
              onClick={() =>
                setCondition({ ...condition, first_disparity: "" })
              }
              onChange={(e) =>
                setCondition({ ...condition, first_disparity: e.target.value })
              }
            />
            <div>이평선</div>
            <SelectBox
              width={80}
              itemList={COMPARISON}
              event={(e) =>
                setCondition({ ...condition, comparison: e.target.value })
              }
            />
            <Input
              width={50}
              value={condition.second_disparity}
              onClick={() =>
                setCondition({ ...condition, second_disparity: "" })
              }
              onChange={(e) =>
                setCondition({ ...condition, second_disparity: e.target.value })
              }
            />
            <div>이평선 </div>
          </div>
          {data && data.length !== 0 && (
            <div className="flex w-16 justify-end pr-3">
              <SearchButton event={() => setShow(!resultShow)} />
            </div>
          )}
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {resultShow && (
            <>
              <CheckTable title="이평선 비교" tableData={data} />
              {/* <LineChart data={data} /> */}
              {/* <div className="w-full overflow-y-auto h-72">{`${JSON.stringify(
              data
            )}`}</div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const MACD: FC<ConditionProps> = ({
  conditionData,
  data,
  state,
  setStateAction,
}) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.MACDType, next: Type.MACDType) => {
      return { ...prev, ...next };
    },
    {
      chart_term:
        conditionData !== null ? conditionData[0].MACD.chart_term : "1m",
      short_disparity:
        conditionData !== null ? conditionData[0].MACD.short_disparity : "12",
      long_disparity:
        conditionData !== null ? conditionData[0].MACD.long_disparity : "24",
      up_down: conditionData !== null ? conditionData[0].MACD.up_down : "이하",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, MACD: condition });
  }, [condition]);

  return (
    <div className="flex items-center w-full">
      <img src={IMG_URL.src} className=" w-8 mr-3" />
      <div className="w-1/12 font-bold text-lg">MACD :</div>
      <div className="w-11/12 bg-navy-50 rounded-md p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
            <SelectBox
              width={80}
              itemList={CHART_TERM}
              event={(e) =>
                setCondition({ ...condition, chart_term: e.target.value })
              }
            />
            <div>차트기준</div>
            <div>단기 이평</div>
            <Input
              width={50}
              value={condition.short_disparity}
              onClick={() =>
                setCondition({ ...condition, short_disparity: "" })
              }
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
              event={(e) =>
                setCondition({ ...condition, up_down: e.target.value })
              }
            />
          </div>
          {data && data.length !== 0 && (
            <div className="flex justify-end pr-3 w-16">
              <SearchButton event={() => setShow(!resultShow)} />
            </div>
          )}{" "}
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {resultShow && (
            <>
              <CheckTable title="MACD" tableData={data} />
              {/* <LineChart data={data} /> */}
              {/* <div className="w-full overflow-y-auto h-72">{`${JSON.stringify(
              data
            )}`}</div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Trend: FC<ConditionProps> = ({
  conditionData,
  data,
  state,
  setStateAction,
}) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.TrendType, next: Type.TrendType) => {
      return { ...prev, ...next };
    },
    {
      chart_term:
        conditionData !== null ? conditionData[0].Trend.chartTerm : "1m",
      MASP: conditionData !== null ? conditionData[0].Trend.MASP : "5",
      trend_term:
        conditionData !== null ? conditionData[0].Trend.trend_term : "0",
      trend_type:
        conditionData !== null ? conditionData[0].Trend.trend_type : "상승",
      trend_reverse:
        conditionData !== null ? conditionData[0].Trend.trend_reverse : "1",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, Trend: condition });
  }, [condition]);

  return (
    <div className="flex w-full items-center">
      <img src={IMG_URL.src} className=" w-8 mr-3" />
      <div className="w-1/12 font-bold text-lg">추세 :</div>
      <div className="w-11/12 bg-navy-50 rounded-md p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
            <SelectBox
              width={80}
              value={condition.chart_term}
              itemList={CHART_TERM}
              event={(e) =>
                setCondition({ ...condition, chart_term: e.target.value })
              }
            />
            <div>차트기준</div>
            <Input
              width={50}
              value={condition.MASP}
              onClick={() => setCondition({ ...condition, MASP: "" })}
              onChange={(e) =>
                setCondition({ ...condition, MASP: e.target.value })
              }
            />
            <div>이평,</div>
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
              value={condition.trend_type}
              width={80}
              event={(e) =>
                setCondition({ ...condition, trend_type: e.target.value })
              }
            />
            <div>추세,</div>
            <SelectBox
              itemList={TREND_TYPE(true)}
              value={condition.trend_reverse}
              width={100}
              event={(e) =>
                setCondition({ ...condition, trend_reverse: e.target.value })
              }
            />
            <div>반전</div>
          </div>
          {data && data.length !== 0 && (
            <div className="flex justify-end pr-3 w-16">
              <SearchButton event={() => setShow(!resultShow)} />
            </div>
          )}{" "}
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {resultShow && (
            <>
              <CheckTable title="추세" tableData={data} />
              {/* <LineChart data={data} /> */}
              {/* <div className="w-full overflow-y-auto h-72">{`${JSON.stringify(
              data
            )}`}</div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Disparity: FC<ConditionProps> = ({
  conditionData,
  data,
  state,
  setStateAction,
}) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.DisparityType, next: Type.DisparityType) => {
      return { ...prev, ...next };
    },
    {
      chart_term:
        conditionData !== null ? conditionData[0].Disparity.chart_term : "1m",
      disparity_term:
        conditionData !== null
          ? conditionData[0].Disparity.disparity_term
          : "12",
      low_disparity:
        conditionData !== null ? conditionData[0].Disparity.low_disparity : "0",
      high_disparity:
        conditionData !== null
          ? conditionData[0].Disparity.high_disparity
          : "100",
    }
  );

  useEffect(() => {
    setStateAction({ ...state, Disparity: condition });
  }, [condition]);

  return (
    <div className="flex w-full items-center">
      <img src={IMG_URL.src} className=" w-8 mr-3" />
      <div className="w-1/12 font-bold text-lg">이격도 :</div>
      <div className="w-11/12 bg-navy-50 rounded-md p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
            <SelectBox
              width={80}
              itemList={CHART_TERM}
              event={(e) =>
                setCondition({ ...condition, chart_term: e.target.value })
              }
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
          {data && data.length !== 0 && (
            <div className="flex justify-end pr-3 w-16">
              <SearchButton event={() => setShow(!resultShow)} />
            </div>
          )}{" "}
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {resultShow && (
            <>
              <CheckTable title="이격도" tableData={data} />
              {/* <LineChart data={data} /> */}
              {/* <div className="w-full overflow-y-auto h-72">{`${JSON.stringify(
              data
            )}`}</div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface Props {
  title?: string;
  disable?: boolean;
  event: () => any;
}

const SearchButton: FC<Props> = ({ event, title, disable }) => {
  return (
    <button
      disabled={disable ? disable : false}
      className={`rounded-lg ${
        disable ? "bg-gray-400" : "bg-blueSecondary"
      } w-full p-2 text-center font-bold text-white cursor-pointer`}
      onClick={event}
    >
      {title ? title : "결과 보기"}
    </button>
  );
};

export { Price, TransactionAmount, MASP, MACD, Trend, Disparity, SearchButton };
