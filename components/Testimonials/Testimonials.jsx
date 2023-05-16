import React from 'react'
import Slider from 'react-slick';
import Header from '../Header';
import TestimonialStyles from '../../styles/components/Testimonials.module.scss';
import SingleTestimonial from './SingleTestimonial.jsx';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'

function NextArrow(props) {
  const { onClick } = props;
  return (
      <div
          className={TestimonialStyles.nextArrow}
          onClick={onClick} >
              <BiChevronRight />
          </div>
  );
}


function PrevArrow(props) {
  const { onClick } = props;
  return (
      <div 
          className={TestimonialStyles.prevArrow}
          onClick={onClick}>
              <BiChevronLeft />
      </div>
  );
}

function Testimonials({ testimonials }) {
  const settings = {
    dots: true,
    dotsClass: `slick-dots ${TestimonialStyles.dots}`,
    infinite: true,
    speed: 500,

    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="component">
      <Header 
      title="What People are Saying"
      />
      <div className={TestimonialStyles.carousel}>
        <Slider {...settings}>
          {testimonials?.map((testimonial, i) => (
            <SingleTestimonial key={i} name={testimonial.name} testimonial={testimonial.review} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials

