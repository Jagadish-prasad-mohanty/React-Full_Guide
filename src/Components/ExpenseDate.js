import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    return (
        <div className="expense_date">
            <div className="expense_date__year">{props.date.getFullYear()}</div>
            <div>{month}</div>
            <div className="expense_date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate
