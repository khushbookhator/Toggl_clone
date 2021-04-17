import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const chartData = [
  {
    label: "Monday",
    value: "8"
  },
  {
    label: "Tuesday",
    value: "9"
  },
  {
    label: "Wednesday",
    value: "10"
  },
  {
    label: "Thursday",
    value: "14"
  },
  {
    label: "Friday",
    value: "5"
  },
  {
    label: "Saturday",
    value: "1"
  },
  {
    label: "Sunday",
    value: "3"
  }
];

export const chartConfigs = {
  type: "column2d", 
  width: "100%", 
  height: "300", 
  dataFormat: "json", 
  dataSource: {
    chart: {
        theme: "fusion",
        yAxisPosition: "right",
        numberSuffix: "h"
    },

    data: chartData
  }
};