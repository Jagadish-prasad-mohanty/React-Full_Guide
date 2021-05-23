import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler= (e)=>{
        setEnteredTitle(e.target.value);
        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         enteredTitle:e.target.value
        //     }
        // })
    }
    const amountChangeHandler= (e)=>{
        setEnteredAmount(e.target.value);
        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         enteredAmount:e.target.value
        //     }
        // })
    }
    const dateChangeHandler= (e)=>{
        setEnteredDate(e.target.value);
        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         enteredDate:e.target.value
        //     }
        // })
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title:enteredTitle,
            price:+enteredAmount,
            date: new Date(enteredDate)
        }
        console.log("[ExpenseForm.js] ... ",expenseData);
        props.onSubmit(expenseData);
        setEnteredDate('')
        setEnteredAmount('')
        setEnteredTitle('')
        // console.log(enteredTitle);
        // console.log(enteredAmount);
        // console.log(enteredDate);
    }

    const [showForm,setShowForm]=useState(false);
    const showAddForm=(e)=>{
        e.preventDefault();
        setShowForm(prevState=>{
            return !prevState;
        })

    }
    return (
        <div>
        {!showForm?<button  className="new-expense__action" onClick={showAddForm}>Add New Expense</button>:
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">

                <div className="new-expense__action">
                    <button type='reset' onClick={showAddForm}>Cancle</button>
                </div>
                <div className="new-expense__action">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>}
        </div>
    )
}

export default ExpenseForm
