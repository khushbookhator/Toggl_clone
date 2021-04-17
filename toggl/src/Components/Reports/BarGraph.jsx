import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useSelector } from "react-redux";


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const today =  new Date()
const date = today.getFullYear()+"-" + (today.getMonth() + 1) + '-' + today.getDate();

var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const chartData = [
  {
    label: `${days[today.getDay()]}
    ${today.getMonth() + 1}/${today.getDate() - 6}`,
  },
  {
    label: `${days[today.getDay()-5]}
    ${today.getMonth() + 1}/${today.getDate() - 5}`,
    value: "9"
  },
  {
    label: `${days[today.getDay()-4]}
    ${today.getMonth() + 1}/${today.getDate() - 4}`,
    value: "10"
  },
  {
    label: `${days[today.getDay()-3]}
    ${today.getMonth() + 1}/${today.getDate() - 3}`,
    value: "14"
  },
  {
    label: `${days[today.getDay()-2]}
    ${today.getMonth() + 1}/${today.getDate() - 2}`,
    value: "5"
  },
  {
    label: `${days[today.getDay()-1]}
    ${today.getMonth() + 1}/${today.getDate() - 1}`,
    value: "1"
  },
  {
    label: `${days[today.getDay()]}
    ${today.getMonth() + 1}/${today.getDate()}`,
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
