import React from 'react'
import FooterLanding from './FooterLanding'
import Headerlanding from './Headerlanding'
import MainLanding from './MainLanding'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className = "landing__page">
            <div className = "inside" >
            <Headerlanding/>
            <MainLanding/>
            <FooterLanding/>
            </div>
             
        </div>
    )
}

export default LandingPage
