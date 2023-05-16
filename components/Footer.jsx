import React from 'react'

import FooterStyles from '../styles/components/Footer.module.scss'
import { Link as Scroll } from 'react-scroll';

import { BsChevronUp } from 'react-icons/bs'

import { zeyada, leagueSpartan } from '@/util/fonts'

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });
  };


  return (
    <div className={FooterStyles.footer}>
      <div className={FooterStyles.wrapper}>
        <div className={FooterStyles.left}>
          <h1 className={zeyada.className}>JT</h1>
        </div>
        <Scroll smooth spy={true} to="about" offset={-100}>
          <button className={leagueSpartan.className}>Start Learning</button>
        </Scroll>
        <div className={FooterStyles.right} onClick={scrollTop}>
          <BsChevronUp className={FooterStyles.icon}/>
        </div>
      </div>
      <div className={FooterStyles.copyright}>
          <p>&copy; 2023 James Taplin Music. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer