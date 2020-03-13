import React from 'react'
import '../style.css'
import logo from '../img/logo.png'

export function Header () {
    return (
        <div className="logo">
            <img src={logo} alt="Studio Ghibli"/>
        </div>
    )
}