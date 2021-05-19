import React from 'react';
import Card from '../../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


function NewExpense(props) {
    const submitHandler= expense=>{
        const expenseData={
            ...expense,
            id:Math.random().toString()
        }
        console.log("[NewExpense.js]...",expenseData);
        props.onAddExpense(expenseData);
    }
    return (
        <Card className="new-expense">
            <ExpenseForm onSubmit={submitHandler}/>            
        </Card>
    )
}

export default NewExpense
