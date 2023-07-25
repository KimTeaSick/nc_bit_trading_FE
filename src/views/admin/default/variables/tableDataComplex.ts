import { isArray } from "@amcharts/amcharts5/.internal/core/util/Type";
import { RootStateType } from "@/module/rootReducer.d";
import { useSelector } from "react-redux";

type RowObj = {
  number: string;
  name: string;
  quantity: string;

  purchaseprice: string;
  currentprice: string;

  purchaseamount: string;
  appraisalamount: string;

  evaluationprofit: string;
  ratereturn: string;
};

const useTableDataComplex = () => {
  const { possessionCoin } = useSelector((state: RootStateType) => state.dash);
  const tableData: any[] = Array.isArray(possessionCoin)
    ? possessionCoin?.map((coin, index) => {
        return {
          number: index + 1,
          name: coin.coin,
          quantity: coin.info.unit,
          purchaseprice: Number(coin.info.buy_price).toFixed(2),
          currentprice: Number(coin.info.now_price).toFixed(2),
          purchaseamount: Number(coin.info.buy_total_price).toFixed(2),
          appraisalamount: Number(coin.info.evaluate_price).toFixed(2),
          evaluationprofit: Number(coin.info.profit).toFixed(2),
          ratereturn: Number(coin.info.rate).toFixed(2),
        };
      })
    : [];

  return tableData;
};

export default useTableDataComplex;
