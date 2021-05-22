import React from 'react'
import './ChartBar.css';

function ChartBar(props) {
    let barHeight="0%";
    if (props.maxHeight>0){
        barHeight=Math.round(props.value/props.maxHeight)*100+'%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:barHeight}}></div>
            </div>
            <div className="chart-bar__lable">{props.label}</div>
        </div>
    )
}

export default ChartBar
