import { FC, useState } from "react";
import CandleChart from "./CandleChart";
import VolumeChart from "./VolumeChart";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import Loading from "../Loading";
import { useWindowSize } from "./useWindowSize";

const Chart: FC = () => {
  const { chartData } = useSelector((state: RootStateType) => state.coin);
  const [dataLength, setDataLength] = useState(24);

  const size = useWindowSize();
  const CHART_WIDTH = size.width;
  const CHART_HEIGHT = size.height;

  const dataWheelHandler = () => {
    window.onwheel = function (e) {
      e.deltaY < 0
        ? setDataLength(dataLength < 18 ? dataLength + 0 : dataLength - 8)
        : setDataLength(
            dataLength > chartData?.length - 8 ? dataLength + 0 : dataLength + 8
          );
    };
  };
  return (
    <div onWheel={dataWheelHandler} className="w-full">
      {chartData.length === 0 ? (
        <Loading />
      ) : (
        <>
          <CandleChart
            CHART_HEIGHT={CHART_HEIGHT}
            CHART_WIDTH={CHART_WIDTH}
            chartData={chartData}
            dataLength={dataLength}
          />
          <VolumeChart
            CHART_HEIGHT={CHART_HEIGHT}
            CHART_WIDTH={CHART_WIDTH}
            chartData={chartData}
            dataLength={dataLength}
          />
        </>
      )}
    </div>
  );
};

export default Chart;
