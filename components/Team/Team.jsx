import React from 'react'
import Header from '../Header'

import Tutor from './Tutor'
import { serifPro } from '@/util/fonts'

import TeamStyles from '../../styles/components/Team.module.scss';

function Team({ tutors }) {

  return (
    <div className="component">
      <Header
        title="Meet Your Tutors"
      />
      <div className={TeamStyles.wrapper} data-scroll-section id="tutors">
        <p className={serifPro.className}>
          Hand-selected masters of their craft, our tutors have years of experience both playing and teaching.
        </p>
        <div className={TeamStyles.tutorsContainer}>
          {tutors?.map((tutor, i) => (
            <Tutor key={i} name={tutor.title} image={tutor.image} sub={tutor.instrument} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Team