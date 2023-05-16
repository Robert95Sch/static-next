import React from 'react'

import SingleTestimonialStyles from '../../styles/components/SingleTestimonial.module.scss'

import { serifPro } from '@/util/fonts'

function SingleTestimonial({ name, testimonial }) {
  return (
    <div className={SingleTestimonialStyles.testimonial}>
    <p className={serifPro.className}>"{testimonial}”</p>
    <h4>{name}</h4>
  </div>
  )
}

export default SingleTestimonial