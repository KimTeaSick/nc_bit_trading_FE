import { useRecommendPrice } from "@/pages/api/dash";

type RowObj = {
  name: string;
  previousclosingprice: number;
  marketprice: number;
  closingprice: number;

  highprice: number;
  lowprice: number;

  tradingvolume24: number;
  floatingprice: number;
  ratechange: number;
};

const useSearchData = () => {
  const { request: recommandPrice }: any = useRecommendPrice();
  console.log("recommandPrice", recommandPrice.data);
  const reponse = <any>[];
  if (!recommandPrice?.isLoading && recommandPrice?.data !== 333) {
    recommandPrice?.data.map((coin: any, index: number) => {
      reponse.push({
        name: coin.coin,
        previousclosingprice: coin.data?.prev_closing_price,
        marketprice: coin.data?.opening_price,
        closingprice: coin.data?.closing_price,
        highprice: coin.data?.max_price,
        lowprice: coin.data?.min_price,
        tradingvolume24: coin.data?.units_traded_24H,
        floatingprice: coin.data?.fluctate_24H,
        ratechange: coin.data?.opening_price,
      });
    });
  }
  return reponse;
};

const tableDataCheck: RowObj[] = [
  {
    name: "VALOR",
    previousclosingprice: 268.6,
    marketprice: 268.6,
    closingprice: 275,

    highprice: 275,
    lowprice: 263.1,

    tradingvolume24: 263.1,
    floatingprice: 263.1,
    ratechange: 263.1,
  },
  {
    name: "ASM",
    previousclosingprice: 268.6,
    marketprice: 268.6,
    closingprice: 275,

    highprice: 275,
    lowprice: 263.1,

    tradingvolume24: 263.1,
    floatingprice: 263.1,
    ratechange: 263.1,
  },
  {
    name: "TDROP",
    previousclosingprice: 268.6,
    marketprice: 268.6,
    closingprice: 275,

    highprice: 275,
    lowprice: 263.1,

    tradingvolume24: 263.1,
    floatingprice: 263.1,
    ratechange: 263.1,
  },
];

export default useSearchData;
