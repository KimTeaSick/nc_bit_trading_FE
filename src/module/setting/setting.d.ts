export type SettingInitialStateType = {
  search_idx?: number;
  search_name: string;
  price: string;
  trends_idx: string;
  trends: string;
  transaction_amount: string;
  avg_volume: string;
  first_disparity: string;
  second_disparity: string;
  disparityStatus: string;
  line_one: Line_Type | null;
  line_two: Line_Type | null;
  line_three: Line_Type | null;
};

export type Line_Type = {
  idx: number;
  name: string;
  range: string;
  color: string;
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
