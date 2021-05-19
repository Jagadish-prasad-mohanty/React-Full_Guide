import React from 'react';
import "./ExpenseFilter.css"

function ExpenseFilter(props) {
    const filterChangeHandler=event=>{
        event.preventDefault();
        props.onYearChange(event.target.value);
    }
    return (
        <div className="expense-filter">
            <label>Filter By Year</label>
            <select onChange={filterChangeHandler} className="expense-filter__select">
                <option>select--</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter
