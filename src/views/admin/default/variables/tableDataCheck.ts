import { useRecommendPrice } from "@/pages/api/dash";

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

export default useSearchData;
