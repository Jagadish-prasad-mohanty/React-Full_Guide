
import React from 'react';

import Chart from '../Chart/Chart';

const chartDataPoints = [
  { label: 'Jan', value: 0 },
  { label: 'Feb', value: 0 },
  { label: 'Mar', value: 0 },
  { label: 'Apr', value: 0 },
  { label: 'May', value: 0 },
  { label: 'Jun', value: 0 },
  { label: 'Jul', value: 0 },
  { label: 'Aug', value: 0 },
  { label: 'Sep', value: 0 },
  { label: 'Oct', value: 0 },
  { label: 'Nov', value: 0 },
  { label: 'Dec', value: 0 }
];
const ExpensesChart = (props) => {
  console.log("[ExpenseChart.js]",chartDataPoints);
  console.log("[ExpenseChart.js]",props.expenses);

  const monthPos=[0,0,0,0,0,0,0,0,0,0,0,0];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    monthPos[expenseMonth]+=expense.price
    // chartDataPoints[expenseMonth].value = expense.price;
  }
  for (let i=0;i<12;i++){
    if (monthPos[i]>0){
      chartDataPoints[i].value = monthPos[i];
    }
    else{
      chartDataPoints[i].value = 0;
    }
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;