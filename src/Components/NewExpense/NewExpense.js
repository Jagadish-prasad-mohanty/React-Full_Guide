import React from 'react';
import Card from '../../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


function NewExpense() {
    return (
        <Card className="new-expense">
            <ExpenseForm/>            
        </Card>
    )
}

export default NewExpense
