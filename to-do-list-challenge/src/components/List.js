import React from 'react'
import '../uikit.css'
import {useSelector} from 'react-redux'

export default function List () {
    const toDoList = useSelector(state => state.toDoList)
    return (
        <ul className="uk-list uk-list-divider list">
            {toDoList.length > 0 && toDoList.map(item => (
                <li key={item}>{item}</li>
            ))}
            {toDoList.lenght === 0 && (<h3>Nothing to do here!</h3>)}
        </ul>
    )
}