import React from 'react'
import './styles.css'
import {useSelector} from 'react-redux'

export function DisplayGifs () {
    const gifsList = useSelector(state => state.gifsList)
    const query = useSelector(state => state.query)
    let i = []
    query ? i = gifsList[0].data : i = null
    return (
        query ?
            i.map (item => {
                return <iframe src={item.embed_url} frameBorder="0" class="giphy-embed" ></iframe>
            })
        :
        <div>
            <iframe src="https://giphy.com/embed/3oEjHS0e1NwfphxCYU" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
    )
}