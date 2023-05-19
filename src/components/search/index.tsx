import { FC, useState } from "react";
import {
  MASP,
  MACD,
  Price,
  TransactionAmount,
  Trend,
  SearchButton,
} from "./Condition";
import { CoinSearch } from "@/pages/api/searchAPIs";

const SearchPage: FC = () => {
  const [searchCondiotion, setSearchCondiotion] = useState({
    Price: {
      flag: "1",
      low_price: "0",
      high_price: "0",
    },
    TransactionAmount: {
      flag: "1",
      low_transaction_amount: "0",
      high_transaction_amount: "0",
    },
    MASP: {
      flag: "1",
      chart_term: "1",
      first_disparity: "0",
      comparison: ">=",
      second_disparity: "0",
    },
    Disparity: {
      flag: "1",
      chart_term: "1",
      disparity_term: "0",
      low_disparity: "0",
      high_disparity: "100",
    },
    Trend: {
      flag: "1",
      chart_term: "1",
      trend_term: "0",
      trend_type: "상승",
      trend_reverse: "1",
    },
    MACD: {
      flag: "1",
      chart_term: "1",
      short_disparity: "12",
      long_disparity: "24",
      up_down: "이하",
    },
  });

  const RowObj = [
    {
      name: "string",
      previousclosingprice: 12,
      marketprice: 12,
      closingprice: 12,
      highprice: 12,
      lowprice: 12,
      tradingvolume24: 12,
      floatingprice: 12,
      ratechange: 12,
    },
  ];

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-row justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            종목 검색
          </h4>
        </div>
        <div className="z-20 flex flex-col gap-1 justify-center items-center">
          <div className="w-5/6 bg-navy-200 rounded-md p-5 flex flex-col gap-2">
            <Price
              tableData={RowObj}
              state={searchCondiotion}
              setStateAction={setSearchCondiotion}
            />
          </div>
          <div className="w-5/6 bg-navy-200 rounded-md p-5 flex flex-col gap-2">
            <TransactionAmount
              tableData={RowObj}
              state={searchCondiotion}
              setStateAction={setSearchCondiotion}
            />
          </div>
          <div className="w-5/6 bg-navy-200 rounded-md p-5 flex flex-col gap-2">
            <MASP
              tableData={RowObj}
              state={searchCondiotion}
              setStateAction={setSearchCondiotion}
            />
          </div>
          <div className="w-5/6 bg-navy-200 rounded-md p-5 flex flex-col gap-2">
            <MACD
              tableData={RowObj}
              state={searchCondiotion}
              setStateAction={setSearchCondiotion}
            />
          </div>
          <div className="w-5/6 bg-navy-200 rounded-md p-5 flex flex-col gap-2">
            <Trend
              tableData={RowObj}
              state={searchCondiotion}
              setStateAction={setSearchCondiotion}
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-5/6 flex justify-center my-2">
            <SearchButton
              title="검섹"
              event={() =>
                CoinSearch(
                  "http://192.168.10.43:8888/dash/getRecommendCoin",
                  searchCondiotion
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
