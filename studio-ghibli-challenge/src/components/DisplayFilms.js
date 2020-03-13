import React from 'react'
import logo from '../img/logo.png'
import './uikit.css'
import './style.css'
import {Film} from './Film'

export function DisplayFilms () {
    return (
        <div className="uk-grid-match">
            <Film/>
        </div>
    )
}