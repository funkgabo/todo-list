import { useState } from 'react'
import './styles.css'
import { Item } from '../Item'

export const TodoList = ({ todosState, setTodosState }) => {
    const handleDeleteClick = (newState) => {
        setTodosState(newState)
    }
    return (
        <ul className='todo-list-container'>
            {todosState.length > 0 ? todosState.map((name, index) => (
                <Item key={index} name={name} index={index} deleteClick={handleDeleteClick} todosState={todosState} /> 
            ))
                : <li className='first-todo-message'>You have no TODO's Created Yet</li>}
        </ul>
    )
}
