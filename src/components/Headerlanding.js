import React from 'react'

function Headerlanding() {
    const style = {
        backgroundColor : "cadetblue",
        color : "white",
        fontFamily : "Arial",
        padding : "1em"
    }
    return (
        <div style = {style} className = "header__landing">
            <h1>COMPANY NAME</h1>
            <p>Company specialization</p>
        </div>
    )
}

export default Headerlanding
