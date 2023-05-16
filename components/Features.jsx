import React from 'react'

import { MdShowChart } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { BsMusicNote } from 'react-icons/bs'
import { serifPro } from '@/util/fonts'

import FeaturesStyles from '../styles/components/Features.module.scss'

function Features() {
  return (
    <div className="component">
      <div className={FeaturesStyles.container}>
        <div className={FeaturesStyles.wrapper}>
          <div className={FeaturesStyles.feature}>
            <MdShowChart className={FeaturesStyles.featureIcon} />
            <h3>Lessons for Every Level</h3>
            <p className={serifPro.className}>We teach all grades, so no matter where you are, helps always at hand.</p>
          </div>
          <div className={FeaturesStyles.feature}>
            <AiFillStar className={FeaturesStyles.featureIcon} />
            <h3>Years of Experience</h3>
            <p className={serifPro.className}>As lifelong musicians, we've been playing for over 15 years, and teaching for over 5.</p>
          </div>
          <div className={FeaturesStyles.feature}>
            <BsMusicNote className={FeaturesStyles.featureIcon} />
            <h3>Play How You Like</h3>
            <p className={serifPro.className}>We play and teach a range of different genres to make learning as fun as possible.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features