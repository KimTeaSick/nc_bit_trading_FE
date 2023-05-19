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
        height: 350,
        type: "line",
        zoom: {
          enabled: true,
        },
      },
    };

    const data = [
      {
        name: "coin-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "coin-2",
        data: [30, 20, 35, 10, 40, 30, 70, 100],
      },
      {
        name: "coin-3",
        data: [10, 60, 105, 15, 45, 50, 30, 30],
      },
      {
        name: "coin-4",
        data: [30, 60, 90, 120, 30, 20, 10, 40],
      },
    ];
    const ReactApexChart = dynamic(() => import("react-apexcharts"), {
      ssr: false,
    });
    return (
      <ReactApexChart
        options={options}
        // series={this.state.chartData}
        series={data}
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
