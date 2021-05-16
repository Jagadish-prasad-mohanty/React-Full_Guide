import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseItems.css';
import Card from  './Card';

function ExpenseItems(props) {
    const expenseItems=props.expenseArray.map(item=><ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date}/>)
    return (
        <Card className="expense">
            {expenseItems}
        </Card>
    )
}

export default ExpenseItems
