import React from 'react'

import Expenses from './components/Expenses/Expenses'
import './App.css'

const App = () => {
  const expenses = [
    { id: 1, title: 'New TV', amount: 50.0, date: new Date(2021, 4, 28) },
    {
      id: 2,
      title: 'Wooden Table',
      amount: 276.98,
      date: new Date(2020, 8, 20),
    },
    { id: 3, title: 'Table lamp', amount: 21.98, date: new Date(2020, 11, 28) },
  ]

  // return React.createElement('div', {}, [
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expenses }),
  // ])
  return (
    <div className="App">
      <h2>Lets get started</h2>
      <Expenses items={expenses} />
    </div>
  )
}

export default App
