import * as React from 'react'
import '@styles/feedback.scss'
import FeedCard from '../components/FeedCard'

const Feedback = () => {
    return (
        <section className='feedback'>
           <h2 className='feedback__title'>What my clients are saying about me</h2>
           <FeedCard/>
        </section>
    )
}

export default Feedback
