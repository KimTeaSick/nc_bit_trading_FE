import { FC } from "react";
import CandleChart from "./CandleChart";
import { ChartSection } from "./Chart.styled";
import VolumeChart from "./VolumeChart";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import Loading from "../common/Loading";
import { useWindowSize } from "./useWindowSize";

const Chart: FC = () => {
  const { chartData } = useSelector((state: RootStateType) => state.coin);
  const size = useWindowSize();
  const CHART_WIDTH = size.width;
  const CHART_HEIGHT = size.height;

  return (
    <div>
      {chartData.length === 0 ? (
        <Loading />
      ) : (
        <>
          <CandleChart
            CHART_HEIGHT={CHART_HEIGHT}
            CHART_WIDTH={CHART_WIDTH}
            chartData={chartData}
          />
          <VolumeChart
            CHART_HEIGHT={CHART_HEIGHT}
            CHART_WIDTH={CHART_WIDTH}
            chartData={chartData}
          />
        </>
      )}
    </div>
  );
};

export default Chart;
