import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

type ChartProps = {
  // using `interface` is also ok
  [x: string]: any;
};
type ChartState = {
  chartData: any[];
  chartOptions: any;
};

class LineChart extends React.Component<ChartProps, ChartState> {
  constructor(props: { chartData: any[]; chartOptions: any }) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    const options: ApexOptions = {
      chart: {
        animations: { enabled: false },
        height: 350,
        type: "line",
        zoom: {
          enabled: true,
        },
      },
    };

    const ReactApexChart = dynamic(() => import("react-apexcharts"), {
      ssr: false,
    });
    return (
      <ReactApexChart
        options={options}
        // series={data}
        series={this.props.chartData}
        type="line"
        width="100%"
        height="30%"
      />
    );
  }
}

export default LineChart;
