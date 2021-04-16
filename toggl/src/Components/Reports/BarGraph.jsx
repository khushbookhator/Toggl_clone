
// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   BarSeries,
//   Title,
//   ArgumentAxis,
//   ValueAxis,
// } from '@devexpress/dx-react-chart-material-ui';

// import { Animation } from '@devexpress/dx-react-chart';

// const data = [
//   { date: '1950', time: 2.525 },
//   { date: '1960', time: 3.018 },
//   { date: '1970', time: 3.682 },
//   { date: '1980', time: 4.440 },
//   { date: '1990', time: 5.310 },
//   { date: '2000', time: 6.127 },
//   { date: '2010', time: 6.930 },
// ];

// export default class Demo extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//     };
//   }

//   render() {
//     const { data: chartData } = this.state;

//     return (
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           <ArgumentAxis />
//           <ValueAxis max={7} />

//           <BarSeries
//             valueField="population"
//             argumentField="year"
//           />
//           <Title text="World population" />
//           <Animation />
//         </Chart>
//       </Paper>
//     );
//   }
// }
