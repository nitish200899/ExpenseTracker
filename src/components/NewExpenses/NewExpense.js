import React,{useState} from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const [isEditing ,setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    return (
        <div className='new-expense'>
            {isEditing ? <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/> 
               : <button onClick = {startEditingHandler}>Add new expense</button>
            }
        </div>
    )
}

export default NewExpense