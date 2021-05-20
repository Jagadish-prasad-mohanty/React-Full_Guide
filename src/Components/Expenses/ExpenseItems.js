import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseItems.css';
import Card from  '../../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function ExpenseItems(props) {
    // const [expenseItems,setExpenseItems]=useState(props.expensesData);
    const filterChangeHandler= year=>{
        console.log("[ExpenseItems.js]...",year);
        // if (year==="select--"){
        //     setExpenseItems(props.expensesData);
        //     return;
        // }
        // setExpenseItems(props.expensesData.filter(item=>item.date.getFullYear()===+year)); 
    }
    const expenses=props.expensesData.map(item=><ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date}/>);
    // console.log(expenses);
    
    return (
        <Card className="expense">
            <ExpenseFilter onChangeFilter={filterChangeHandler}/>
            {expenses}
        </Card>
    )
}

export default ExpenseItems
