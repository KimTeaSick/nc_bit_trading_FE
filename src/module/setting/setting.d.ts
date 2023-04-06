export type SettingInitialStateType = {
  search_idx?: number;
  search_name: string;
  price: string;
  trends_term: string;
  trends: string;
  transaction_amount: string;
  avg_volume: string;
  first_disparity: string;
  second_disparity: string;
};

export type SearchOptionType = {
  name?: string;
  avgVolume: string;
  first_disparity: string;
  price: string;
  second_disparity: string;
  transaction_amount: string;
  trends: string;
};
