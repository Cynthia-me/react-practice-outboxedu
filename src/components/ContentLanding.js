import React from 'react'
import Details from './DetailsPage'
import './ContentLanding.css'

function ContentLanding(props) {
    return (
        <div className = "content__1">
        <h1 style = {{fontSize : "48px"}}>{props.details.number}</h1>
        <div className = "content__2">
        <h2>{props.details.title}</h2>
        <p>{props.details.text}</p>
        </div>
        </div>
    )
}

export default ContentLanding
