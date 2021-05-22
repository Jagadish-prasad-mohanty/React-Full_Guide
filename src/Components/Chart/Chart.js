import React from 'react'
import Card from '../../UI/Card';
import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
    
    console.log("[Chart.js]",props.breakPoints[0]);
    const pointValue=props.breakPoints.map(expense=>expense.value);
    // console.log(pointValue);
    const maxHeight=Math.max(...pointValue);
    // console.log(maxHeight)
    return (
        <Card className="chart">
            {props.breakPoints.map(bPoint=>(
                <ChartBar 
                key={bPoint.lable}
                value={bPoint.value}
                maxHeight={maxHeight}
                lable={bPoint.lable}
                
            />))} 
        </Card>
    )
}

export default Chart
