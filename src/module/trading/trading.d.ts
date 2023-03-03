type OrderListType = {
  contract: OrderListContractType[];
  payment_currency: string;
  order_currency: string;
  order_status: string;
  cancel_date: string;
  cancel_type: string;
  watch_price: string;
  order_price: string;
  order_date: string;
  order_qty: string;
  type: string;
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
