import dynamic from "next/dynamic";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props: { chartData: any[]; labelData: any[] }) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-line",
        },
        xaxis: {
          categories: this.props.labelData,
        },
      },

      series: [
        {
          name: "money",
          data: this.props.chartData,
        },
      ],
    };
  }

  render() {
    const ReactApexChart = dynamic(() => import("react-apexcharts"), {
      ssr: false,
    });
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
