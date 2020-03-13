import React, {useEffect, useState} from "react"
import './uikit.css'
import './style.css'

export function Film() {
    const [database, setDatabase] = useState([])

    React.useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(data => setDatabase(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {database.map(({title, description }) => (
                <div className="uk-card uk-card-hover uk-card-default uk-card-large uk-card-body">
                    <h3 className="uk-card-title">{title}</h3>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    )
}