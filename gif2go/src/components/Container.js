import React from 'react'
import {DisplayGifs} from './DisplayGifs'
import {SearchGifs} from './SearchGifs'
import './styles.css'

export const Container = () => {
    return (
        <>
        <div className="container">
            <header>Gif<span>2</span>Go</header>
            <section className="form">
                <SearchGifs/>
            </section>
            <section className="display-results">
                <DisplayGifs/>
            </section>
        </div>
        </>
    )
}
