import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {
    const expenses=props.items.length===0?<h2 style={{textAlign:'center',color:'white'}}>Nothing Here</h2>: props.items.map(item=><ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date}/>);
    return (
        <ul className='expense-list'>
            {expenses}
        </ul>
    )
}

export default ExpenseList
