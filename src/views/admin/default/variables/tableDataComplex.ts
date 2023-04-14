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

// <div key={index}>{index + 1}</div>
// <div key={index}>{coin.coin}</div>
// <div>{coin.info.unit}</div>
// <div>{Number(coin.info.buy_price).toFixed(2)} 원</div>
// <div>{Number(coin.info.now_price).toFixed(2)} 원</div>
// <div>{Number(coin.info.buy_total_price).toFixed(2)} 원</div>

// <div>{Number(coin.info.evaluate_price).toFixed(2)} 원</div>
// <div>{Number(coin.info.profit).toFixed(2)} 원</div>
// <div>{Number(coin.info.rate).toFixed(2)} %</div>
const useTableDataComplex = () => {
  const { possessionCoin } = useSelector((state: RootStateType) => state.dash);

  const tableData: any[] = possessionCoin.map((coin, index) => {
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
  });
  return tableData;
};

export default useTableDataComplex;
