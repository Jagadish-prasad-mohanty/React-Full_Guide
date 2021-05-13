import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    
    return (
        <div className="expense_item">
        <ExpenseDate {...props}/>
        <div className="expense_item__description">
            <h2>{props.title}</h2>
            <div className="expense_item__price">${props.price}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;
