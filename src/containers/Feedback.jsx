import * as React from "react";
import FeedCard from "@components/FeedCard";
import { motion } from "framer-motion";
import useView from "@hooks/useView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "@styles/feedback.scss";

const containerVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

const Feedback = () => {
  const { ref, controls } = useView();

  return (
    <motion.section
      className="feedback"
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={controls}
    >
      <h2 className="feedback__title">What my clients are saying about me</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        tag="div"
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          950: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
        }}
      >
        <SwiperSlide>
          <FeedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeedCard />
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default Feedback;
