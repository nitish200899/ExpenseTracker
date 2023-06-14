import React,{useState} from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense'
import './App.css'

const DUMMY_EXPENSES = [
  { id: 1, title: 'New TV', amount: 50.0, date: new Date(2021, 4, 28) },
  {
    id: 2,
    title: 'Wooden Table',
    amount: 276.98,
    date: new Date(2020, 8, 20),
  },
  { id: 3, title: 'Table lamp', amount: 21.98, date: new Date(2020, 11, 28) },
]

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  // return React.createElement('div', {}, [
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expenses }),
  // ])

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses => {
      return [expense , ...prevExpenses]
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  )
}

export default App
