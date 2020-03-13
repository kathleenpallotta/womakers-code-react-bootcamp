import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addToDo} from '../actions'
import '../uikit.css'
import '../style.css'

export default function InputToDo() {
    const [toDoItem, setToDoItem] = useState('')
    const dispatch = useDispatch()
    const addToDoItem = () => dispatch(addToDo(toDoItem))
    return (
        <>
        <div className="to-do-form">
            <input className="uk-input uk-form-width-large" type="text" 
            onChange={({target: {value}}) => setToDoItem(value)} />
            <button className="add-todo uk-button uk-button-primary" onClick={addToDoItem}>Add To Do</button>
        </div>     
        </>
    )
}
