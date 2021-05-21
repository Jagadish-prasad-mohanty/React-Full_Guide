import React, { useState } from 'react'
import ExpenseList from './ExpenseList';
import './ExpenseItems.css';
import Card from  '../../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function ExpenseItems(props) {
    const [expenseItems,setExpenseItems]=useState(props.expensesData);
    const filterChangeHandler= year=>{
        console.log("[ExpenseItems.js]...",year);
        if (year==="select--"){
            setExpenseItems(props.expensesData);
        }
        else{
            setExpenseItems(props.expensesData.filter(item=>item.date.getFullYear()===+year)); 
        }
    }
    
    
    
    
    return (
        <Card className="expense">
            <ExpenseFilter onChangeFilter={filterChangeHandler}/>
            <ExpenseList items={expenseItems}/>
        </Card>
    )
}

export default ExpenseItems
