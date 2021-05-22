import React, { useState } from 'react'
import ExpenseList from './ExpenseList';
import './ExpenseItems.css';
import Card from  '../../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from '../Chart/ExpenseChart';

function ExpenseItems(props) {
    const [expenseYear,setExpenseYear]=useState("select--");
    const filterChangeHandler= year=>{
        setExpenseYear(year);
    }
    
    const filteredItems=(expenseYear==="select--")?props.expensesData:props.expensesData.filter(item=>item.date.getFullYear().toString()===expenseYear)
    return (
        <Card className="expense">
            <ExpenseFilter 
            expenseYear={expenseYear}
            onChangeFilter={filterChangeHandler}/>
            <ExpenseChart expenses={filteredItems}/>
            <ExpenseList items={filteredItems}/>
        </Card>
    )
}

export default ExpenseItems
