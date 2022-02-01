import * as React from 'react'
import '@styles/feedback.scss'
import FeedCard from '../components/FeedCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

const Feedback = () => {
    return (
        <section className='feedback'>
           <h2 className='feedback__title'>What my clients are saying about me</h2>
        <Swiper
         modules={[ Pagination, Navigation]}
         spaceBetween={50}
         slidesPerView={1}
         tag="div"
         navigation
         pagination={{ clickable: true }}
         breakpoints= {{
            950: {
              slidesPerView: 3,
              spaceBetween: 1,
            }}
        }
           >
            <SwiperSlide><FeedCard/></SwiperSlide>
            <SwiperSlide><FeedCard/></SwiperSlide>
            <SwiperSlide><FeedCard/></SwiperSlide>
        </Swiper>
           
        </section>
    )
}

export default Feedback
