import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useSelector } from "react-redux";


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


export const BarGraphData = () => {
  const today =  new Date()
  const task = useSelector(state => state.tasks.task)
  const date = today.getFullYear()+"-" + (today.getMonth() + 1) + '-' + today.getDate();

  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const chartData = [
  {
    label: `${days[Math.abs(today.getDay()-1)]}
    ${today.getMonth() + 1}/${today.getDate() - 6}`,
    value: `${task.filter((item) => item.date === today.getFullYear()+"-"+(today.getMonth() + 1) + '-' + today.getDate() -6).reduce((acc, b) => acc + b.total_time, 0)/60}`
  },
  {
    label: `${days[Math.abs(today.getDay()-2)]}
    ${today.getMonth() + 1}/${today.getDate() - 5}`,
    value: `${task.filter((item) => item.date === today.getDate() -5 + "-0" + (today.getMonth() + 1) + "-" + today.getFullYear()).reduce((acc, b) => acc + b.total_time, 0)/60}`
  },
  {
    label: `${days[Math.abs(today.getDay()-3)]}
    ${today.getMonth() + 1}/${today.getDate() - 4}`,
    value: `${task.filter((item) => item.date === today.getDate() -4 + "-0" + (today.getMonth() + 1) + "-" + today.getFullYear()).reduce((acc, b) => acc + b.total_time, 0)/60}`
  },
  {
    label: `${days[Math.abs(today.getDay()-4)]}
    ${today.getMonth() + 1}/${today.getDate() - 3}`,
    value: `${task.filter((item) => item.date === today.getDate() -3 + "-0" + (today.getMonth() + 1) + "-" + today.getFullYear()).reduce((acc, b) => acc + b.total_time, 0)/60}`
  },
  {
    label: `${days[Math.abs(today.getDay()-5)]}
    ${today.getMonth() + 1}/${today.getDate() - 2}`,
    value: `${task.filter((item) => item.date === today.getDate() -2 + "-0" + (today.getMonth() + 1) + "-" + today.getFullYear()).reduce((acc, b) => acc + b.total_time, 0)/60}`
  },
  {
    label: `${days[Math.abs(today.getDay()-6)]}
    ${today.getMonth() + 1}/${today.getDate() - 1}`,
    value: `${task.filter((item) => item.date === today.getDate() -1 + "-0" + (today.getMonth() + 1) + "-" + today.getFullYear()).reduce((acc, b) => acc + b.total_time, 0)/60}`
  },
  {
    label: `${days[Math.abs(today.getDay())]}
    ${today.getMonth() + 1}/${today.getDate()}`,
    value: `${task.filter((item) => item.date === today.getDate() + "-0" + (today.getMonth() + 1) + "-" + today.getFullYear()).reduce((acc, b) => acc + b.total_time, 0)/60}`
  }
];
  const chartConfigs = {
    type: "column2d", 
    width: "100%", 
    height: "400", 
    dataFormat: "json", 
    dataSource: {
      chart: {
          theme: "fusion",
          yAxisPosition: "right",
          numberSuffix: "m"
      },
      data: chartData
    }
  };
  return(
    <ReactFC {...chartConfigs}/>
  )
} 



