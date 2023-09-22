import { useState } from 'react'
import './styles.css'

export const AddTodoForm = ({ setTodosState, todosState }) => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim() !== ''){
            setTodosState([...todosState, inputValue])
            setInputValue('')
        }
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <form className='add-todo-form' onSubmit={handleSubmit}>
            <input className='add-todo-input' value={inputValue} onChange={handleChange} type='text' />
            <button className='add-todo-button' type='submit'>Add Todo</button>
        </form>
    )
}