import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";
import { useTransactionAmount } from "../lib/useTransactionAmount";
import { useDisparity } from "../lib/useDisparity";
import { usePrice } from "../lib/usePrice";
import { useTrend } from "../lib/useTrend";
import { useMASP } from "../lib/useMASP";
import { useMACD } from "../lib/useMACD";
import TTA from "../components/TransactionAmount";
import DisparityC from "../components/Disparity";
import TrendC from "../components/Trend";
import Price from "../components/Price";
import MASPC from "../components/MASP";
import MACDC from "../components/MACD";
import CheckTable from "../CheckTable";
import Card from "../../card";
import { SearchInitialStateType } from "@/module/search/search";
import { setSearchResultData } from "@/module/search";
import IMG_URL from "@/assets/img/search/bitcoin.png";
import { CoinSearch } from "@/pages/api/searchAPIs";
import { Input } from "@/components/common/input";
import { SearchButton } from "../Condition";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { conditionExtract } from "../lib/conditionExtract";
import { SearchCondition } from "../type/condition";
import { RootStateType } from "@/module/rootReducer.d";

interface Props {
  searchSlice: SearchInitialStateType;
  btnEvent: (type: string, body?: any, name?: string) => Promise<void>;
  setStage: Dispatch<SetStateAction<number>>;
}

const ConditionIndex: FC<Props> = ({ searchSlice, btnEvent, setStage }) => {
  const initial: SearchCondition | undefined = conditionExtract(
    searchSlice.conditionDetail
  );
  const [price, setPrice] = usePrice(initial?.Price);
  const [MASP, setMASP] = useMASP(initial?.MASP);
  const [dis, setDis] = useDisparity(initial?.Disparity);
  const [trend, setTrend] = useTrend(initial?.Trend);
  const [MACD, setMACD] = useMACD(initial?.MACD);
  const [tta, setTta] = useTransactionAmount(initial?.TransactionAmount);
  const [useConditionList, setUseConditionList] = useState<string[]>(); // 검색에 사용된 컨디션
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [name, setName] = useState<string>(""); // 로딩 상태
  const { autoTradingStatus } = useSelector(
    (state: RootStateType) => state.common
  );
  const dispatch = useDispatch();

  const searchBtnEvent = useCallback(async () => {
    if (autoTradingStatus) {
      alert("자동매매 실행 중 종목을 검색 할 수 없습니다.");
      return;
    }
    const body = {
      Price: price,
      TransactionAmount: tta,
      MASP: MASP,
      Disparity: dis,
      Trend: trend,
      MACD: MACD,
    };
    setLoading(true);
    const response = await CoinSearch(body);
    if (response === false) {
      setLoading(false);
      alert("검색 중 에러가 발생했습니다!");
      return;
    } else {
      dispatch(setSearchResultData(response.data));
      setUseConditionList(response.data.optionList);
      setLoading(false);
    }
  }, [dispatch, price, tta, MASP, dis, trend, MACD]);

  return (
    <Card extra="p-3 shadow-3xl">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="z-20 flex flex-col gap-2 justify-center items-center">
          <Price
            value={price}
            setValue={setPrice}
            data={searchSlice.priceSearchCoin}
          />
          <TTA
            value={tta}
            setValue={setTta}
            data={searchSlice.transactionAmountSearchCoin}
          />
          <MASPC
            value={MASP}
            setValue={setMASP}
            data={searchSlice.MASPSearchCoin}
          />
          <TrendC
            value={trend}
            setValue={setTrend}
            data={searchSlice.trendSearchCoin}
          />
          <DisparityC
            value={dis}
            setValue={setDis}
            data={searchSlice.disparitySearchCoin}
          />
          <MACDC
            value={MACD}
            setValue={setMACD}
            data={searchSlice.MACDSearchCoin}
          />
          {searchSlice.recommends && searchSlice.recommends.length !== 0 && (
            <div className="w-full bg-navy-50 rounded-md p-5 flex flex-col gap-2">
              <CheckTable
                optionList={useConditionList}
                tableData={searchSlice.recommends}
              />
            </div>
          )}
        </div>
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
                searchSlice.conditionDetail !== null
                  ? Object.keys(searchSlice.conditionDetail) + ""
                  : name
              }
              onChange={(e) => setName(e.target.value)}
              placeholder="조건 이름을 등록해 주세요."
            />
          </div>
        </div>

        <div className="w-1/3 flex my-2 gap-1">
          <SearchButton
            title="검색"
            event={() => searchBtnEvent()}
            disable={loading}
            loading={loading}
          />
          <SearchButton
            title={searchSlice.conditionDetail !== null ? "수정" : "등록"}
            event={() => {
              const body = {
                Price: price,
                TransactionAmount: tta,
                MASP: MASP,
                Disparity: dis,
                Trend: trend,
                MACD: MACD,
              };
              searchSlice.conditionDetail !== null
                ? btnEvent("editCondition", body)
                : btnEvent("registerCondition", body, name);
            }}
          />
          {searchSlice.conditionDetail !== null && (
            <>
              <SearchButton
                title="사용"
                event={() => btnEvent("useCondition")}
              />
              <SearchButton
                title="삭제"
                event={() => btnEvent("deleteCondition")}
              />
            </>
          )}
          <SearchButton title="뒤로" event={() => setStage(0)} />
        </div>
      </div>
    </Card>
  );
};

export default ConditionIndex;
