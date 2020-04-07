import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {getGifs, getQuery} from '../actions'

export const SearchGifs = () => {
    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState('')
    const url = 'https://api.giphy.com/v1/gifs/search'
    const key = 'ME8X87uHXIEVMdYHN3wH4OoYYz4SCgbC'
    const dispatch = useDispatch()
    const displayGifs = () => {
        dispatch(getGifs(gifs))
        dispatch(getQuery(query))
    }

    React.useEffect(() => {
        fetch(url + `?q=${query}&api_key=${key}&limit=4`)
            .then(response => response.json())
            .then(data => setGifs(data))
            .catch(err => console.error(err))
    }, [query])

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            displayGifs();
        }
    }

    return (
        <>
            <input className="query" type="text"
                onChange={({target: {value}}) => setQuery(value)}
                onKeyPress={handleKeyPress} 
            />
            <button className="search-button" onClick={displayGifs}>Search GIF</button>
        </>
    )
}