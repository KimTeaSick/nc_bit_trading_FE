import { FC, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Table_and_his from "./components/Table_and_his";
import {
  getChartData,
  get_day_week_month_data,
  useChartData,
} from "@/pages/api/dash";
import { DAY_COL, WEEK_COL, MONTH_COL } from "./variables/table";
import LineChart from "@/components/common/charts/LineChart";
import { ChartButton } from "./components/ChartButton";
import { NextPage } from "next";

const Dash_rate_detail: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [table_data, set_table_data] = useState<any>({});
  const [chartData, setChartData] = useState([]);
  const [term, setTerm] = useState(1);
  // const chart = useChartData(id, 3);

  const get_table_data = useCallback(async () => {
    if (id !== undefined) {
      const chartRes = await getChartData(id, term);
      const res = await get_day_week_month_data(Number(id));
      setChartData(chartRes);
      set_table_data(res);
    }
  }, [id, term]);

  useEffect(() => {
    get_table_data();
  }, [get_table_data]);

  return (
    <div>
      <p>수익률 상세 페이지</p>
      <Table_and_his
        COL={DAY_COL}
        type={"일간 데이터"}
        data={table_data?.day_data}
      />
      <LineChart chartData={[{ name: "money", data: chartData }]} />
      <ChartButton setValue={setTerm} />
      <Table_and_his
        COL={WEEK_COL}
        type={"주간 데이터"}
        data={table_data?.week_data}
      />
      <Table_and_his
        COL={MONTH_COL}
        type={"월간 데이터"}
        data={table_data?.month_data}
      />
    </div>
  );
};

export default Dash_rate_detail;
