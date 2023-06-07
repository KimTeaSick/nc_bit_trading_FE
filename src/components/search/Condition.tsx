import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Input } from "../common/input";
import * as Type from "./ConditionType";
import SelectBox, {
  CHART_TERM,
  COMPARISON,
  TREND_TYPE,
  UP_DOWN,
} from "./SelectBox";
import CheckTable from "./CheckTable";
import CheckBox from "./CheckBox";
import styled, { keyframes } from "styled-components";

interface ConditionProps {
  data?: any;
  state: any;
  setStateAction: Dispatch<SetStateAction<any>>;
}

const Price: FC<ConditionProps> = ({ data, state, setStateAction }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.PriceType, next: Type.PriceType) => {
      return { ...prev, ...next };
    },
    { ...state.Price }
  );

  useEffect(() => {
    setStateAction({ ...state, Price: condition });
  }, [condition]);

  const flagEvent = useCallback(() => {
    setCondition({ ...condition, flag: condition.flag === 1 ? 0 : 1 });
  }, [condition, setCondition]);

  return (
    <div className="w-full flex items-center">
      <CheckBox flag={condition.flag} event={flagEvent} />
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

        <div className="flex w-full justify-center">
          <div className="mt-2 flex w-11/12 flex-col">
            {resultShow && <CheckTable title="가격" tableData={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionAmount: FC<ConditionProps> = ({
  data,
  state,
  setStateAction,
}) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.TransactionAmount, next: Type.TransactionAmount) => {
      return { ...prev, ...next };
    },
    { ...state.TransactionAmount }
  );

  useEffect(() => {
    setStateAction({ ...state, TransactionAmount: condition });
  }, [condition]);

  const flagEvent = useCallback(() => {
    setCondition({ ...condition, flag: condition.flag === 1 ? 0 : 1 });
  }, [condition, setCondition]);

  return (
    <div className="w-full flex items-center">
      <CheckBox flag={condition.flag} event={flagEvent} />
      <div className="w-1/12 font-bold text-lg">가격 대금 :</div>
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
            <div>차트기준, </div>
            <div>거래 대금이</div>
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
        <div className="flex w-full justify-center">
          <div className="mt-2 flex w-11/12 flex-col">
            {data && resultShow && (
              <CheckTable title="거래 대금" tableData={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MASP: FC<ConditionProps> = ({ data, state, setStateAction }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.MASPType, next: Type.MASPType) => {
      return { ...prev, ...next };
    },
    { ...state.MASP }
  );

  useEffect(() => {
    setStateAction({ ...state, MASP: condition });
  }, [condition]);

  const flagEvent = useCallback(() => {
    setCondition({ ...condition, flag: condition.flag === 1 ? 0 : 1 });
  }, [condition, setCondition]);

  return (
    <div className="flex items-center w-full">
      <CheckBox flag={condition.flag} event={flagEvent} />
      <div className="w-1/12 font-bold text-lg">이평선 비교 :</div>
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
              value={condition.comparison}
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
        <div className="flex w-full justify-center">
          <div className="mt-2 flex w-11/12 flex-col">
            {resultShow && <CheckTable title="이평선 비교" tableData={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const MACD: FC<ConditionProps> = ({ data, state, setStateAction }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.MACDType, next: Type.MACDType) => {
      return { ...prev, ...next };
    },
    { ...state.MACD }
  );

  useEffect(() => {
    setStateAction({ ...state, MACD: condition });
  }, [condition]);

  const flagEvent = useCallback(() => {
    setCondition({ ...condition, flag: condition.flag === 1 ? 0 : 1 });
  }, [condition, setCondition]);

  return (
    <div className="flex items-center w-full">
      <CheckBox flag={condition.flag} event={flagEvent} />
      <div className="w-1/12 font-bold text-lg">MACD :</div>
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
            <div>signal</div>
            <Input
              width={50}
              value={condition.signal}
              onClick={() => setCondition({ ...condition, signal: "" })}
              onChange={(e) =>
                setCondition({ ...condition, signal: e.target.value })
              }
            />
            <div>MACD,</div>
            <div>0선</div>
            <SelectBox
              width={80}
              value={condition.up_down}
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
        <div className="flex w-full justify-center">
          <div className="mt-2 flex w-11/12 flex-col">
            {resultShow && <CheckTable title="MACD" tableData={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Trend: FC<ConditionProps> = ({ data, state, setStateAction }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.TrendType, next: Type.TrendType) => {
      return { ...prev, ...next };
    },
    { ...state.Trend }
  );

  useEffect(() => {
    setStateAction({ ...state, Trend: condition });
  }, [condition]);

  const flagEvent = useCallback(() => {
    setCondition({ ...condition, flag: condition.flag === 1 ? 0 : 1 });
  }, [condition, setCondition]);

  return (
    <div className="flex w-full items-center">
      <CheckBox flag={condition.flag} event={flagEvent} />
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
            <div>반전</div>
            <SelectBox
              itemList={TREND_TYPE(true)}
              value={condition.trend_reverse}
              width={100}
              event={(e) =>
                setCondition({ ...condition, trend_reverse: e.target.value })
              }
            />
          </div>
          {data && data.length !== 0 && (
            <div className="flex justify-end pr-3 w-16">
              <SearchButton event={() => setShow(!resultShow)} />
            </div>
          )}{" "}
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-2 flex w-11/12 flex-col">
            {data && resultShow && <CheckTable title="추세" tableData={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Disparity: FC<ConditionProps> = ({ data, state, setStateAction }) => {
  const [resultShow, setShow] = useState(false);
  const [condition, setCondition] = useReducer(
    (prev: Type.DisparityType, next: Type.DisparityType) => {
      return { ...prev, ...next };
    },
    { ...state.Disparity }
  );

  useEffect(() => {
    setStateAction({ ...state, Disparity: condition });
  }, [condition]);

  const flagEvent = useCallback(() => {
    setCondition({ ...condition, flag: condition.flag === 1 ? 0 : 1 });
  }, [condition, setCondition]);

  return (
    <div className="flex w-full items-center">
      <CheckBox flag={condition.flag} event={flagEvent} />
      <div className="w-1/12 font-bold text-lg">이격도 :</div>
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
        <div className="flex w-full justify-center">
          <div className="mt-2 flex w-11/12 flex-col">
            {resultShow && <CheckTable title="이격도" tableData={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  title?: string;
  disable?: boolean;
  event: () => any;
  loading?: boolean;
}

const spin = keyframes`
from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  border-radius: 50%;
  border: 3px solid #e0e0e0;
  border-bottom: 5px solid #f54329;
  animation: ${spin} 1s linear infinite;
  position: relative;
`;

const SearchButton: FC<Props> = ({ event, title, disable, loading }) => {
  return (
    <button
      disabled={disable ? disable : false}
      className={`rounded-lg flex h-14 text-base
      ${disable ? "bg-gray-400" : "bg-blueSecondary"} 
      w-full p-1 text-center font-bold text-white cursor-pointer items-center justify-center`}
      onClick={event}
    >
      <div>{title ? title : "결과 보기"}</div>
      {loading ? <Spinner /> : null}
    </button>
  );
};

export { Price, TransactionAmount, MASP, MACD, Trend, Disparity, SearchButton };
