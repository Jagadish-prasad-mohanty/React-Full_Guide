import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseItems.css';
import Card from  '../../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function ExpenseItems(props) {
    const [expenseItems,setExpenseItems]=useState(props.expenseArray);
    const yearChangeHandler= year=>{
        console.log("[ExpenseItems.js]...",year);
        if (year==="select--"){
            console.log(props.expenseArray);
            setExpenseItems(props.expenseArray)
            return;
        }
        setExpenseItems(props.expenseArray.filter(item=>item.date.getFullYear()===+year));

        
        
    }
    const expenses=expenseItems.map(item=><ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date}/>);
    // console.log(expenses);
    
    return (
        <Card className="expense">
            <ExpenseFilter onYearChange={yearChangeHandler}/>
            {expenses}
        </Card>
    )
}

export default ExpenseItems
