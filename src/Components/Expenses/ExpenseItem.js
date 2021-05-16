import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle]=useState(props.title)
    const clickHandler=(e)=>{
        e.preventDefault();
        setTitle("Updated!!");
    }
    return (
        <Card className="expense_item">
        <ExpenseDate {...props}/>
        <div className="expense_item__description">
            <h2>{title}</h2>
            <div className="expense_item__price">${props.price}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
      