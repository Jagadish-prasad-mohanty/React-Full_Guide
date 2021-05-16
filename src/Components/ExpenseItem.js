import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card';

function ExpenseItem(props) {
    
    return (
        <Card className="expense_item">
        <ExpenseDate {...props}/>
        <div className="expense_item__description">
            <h2>{props.title}</h2>
            <div className="expense_item__price">${props.price}</div>
        </div>
        </Card>
    );
}

export default ExpenseItem;
