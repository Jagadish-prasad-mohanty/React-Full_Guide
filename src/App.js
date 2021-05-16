import './App.css';
import ExpenseItems from './Components/Expenses/ExpenseItems';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
  const expenseArray=[
    {
      id:1,
      title:"Car expense",
      date:new Date(2021,5,13),
      price:294.67
    },
    {
      id:2,
      title:"Bike expense",
      date:new Date(2021,5,13),
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
      date:new Date(2021,5,13),
      price:450
    },
  ]
  return (
    <div className="App">
      <NewExpense/>
      <ExpenseItems expenseArray={expenseArray}/>
    </div>
  );
}

export default App;
