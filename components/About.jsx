import React from 'react'
import Header from './Header'

import AboutStyles from '../styles/components/About.module.scss'

import { serifPro } from '@/util/fonts'

function About({ mainPageData }) {

  return (
    <div className="component">
      <Header 
          title={mainPageData[0].aboutHeader}
      />
      <div className={AboutStyles.wrapper}>
        <div className={AboutStyles.descBody}>
          <p className={serifPro.className}>{mainPageData[0].aboutBody}</p>
        </div>
      </div>
    </div>
  )
}

export default About