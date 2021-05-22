import { useState } from 'react';
import './App.css';
import Chart from './Components/Chart/Chart';
import ExpenseItems from './Components/Expenses/ExpenseItems';
import NewExpense from './Components/NewExpense/NewExpense';

const expenseArray=[
  {
    id:1,
    title:"Car expense",
    date:new Date(2019,5,13),
    price:294.67
  },
  {
    id:2,
    title:"Bike expense",
    date:new Date(2019,5,13),
    price:291.34
  },
  {
    id:3,
    title:"Table",
    date:new Date(2021,5,13),
    price:350.34
  },
  {
    id:4,
    title:"House",
    date:new Date(2020,5,13),
    price:450
  },
]
function App() {
  const [expensesData,setExpensesData]=useState(expenseArray);
  const addExpenseHandler =expense =>{
    setExpensesData((prevState)=>{
      return [expense, ...prevState]
    })
    console.log(expensesData);
    
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Chart/>
      <ExpenseItems expensesData={expensesData}/>
    </div>
  );
}

export default App;
