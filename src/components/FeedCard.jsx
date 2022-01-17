import * as React from 'react'
import clientImg from '@images/client.jpeg'
import '@styles/feedCard.scss'

const FeedCard = () => {
    return (
        <div className='feedback__card'>
            <div className="feedback__img">
                <img src={ clientImg } alt='client photo' />
            </div>
            <div className="feedback_info">
                <p className="feedback__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat tortor, pellentesque ipsum. In gravida ornare nec a nulla ac tortor a.</p>
                <h4 className="feedback__name">Carlton Reeves <span>CEO at PRcompany</span></h4>
            </div>
            
        </div>
    )
}

export default FeedCard
