import React from 'react'
import ContentLanding from './ContentLanding'
import Details from './DetailsPage'

function MainLanding() {
    const detailSection = Details.map(detail => <ContentLanding key = {detail.id} details = {detail}/>)
    return (

        <div>
          {detailSection}  
        </div>
    )
}

export default MainLanding
