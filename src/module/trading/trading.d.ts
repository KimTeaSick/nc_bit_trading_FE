type OrderListType = {
  coin_name: string;
  unit: string;
  price: string;
  total_price: string;
  fee: string;
  type: string;
  date: string;
};
type OrderListContractType = {
  fee: string;
  fee_currency: string;
  price: string;
  total: string;
  transaction_date: string;
  units: string;
};

export type TradingInitialState = {
  orderList: OrderListType[];
  orderListStatus: string;
  orderListPage: string;
};
