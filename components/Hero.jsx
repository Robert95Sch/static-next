import React from 'react'
import { urlFor } from '@/sanity.js'

import { BiChevronDown } from 'react-icons/bi'
import { AiFillPlayCircle } from 'react-icons/ai'
import { ImVolumeMedium } from 'react-icons/im'

import { Link as Scroll } from 'react-scroll';

import { baskerVille, leagueSpartan } from '@/util/fonts'
import HeroStyles from '../styles/components/Hero.module.scss'

function Hero({ mainPageData }) {
    const backgroundImageUrl = urlFor(mainPageData[0].heroSectionImage).url()

    return (
        <div className={HeroStyles.container} data-scroll-section id="home">
            <div className={HeroStyles.wrapper}>
                <div className={HeroStyles.imageContainer} 
                    style={{backgroundImage: `url('${backgroundImageUrl}')` }}>
                    </div>
                <div className={HeroStyles.content}>
                    <h1>Expert Guitar Lessons</h1>
                    <h4>Premium Lessons For Every Level</h4>
                    <button className={leagueSpartan.className}>Start Learning</button>
                    <Scroll to="about" offset={-100}>
                        <BiChevronDown />
                    </Scroll>
                </div>
                {/* <div className={HeroStyles.controls}>
                    <AiFillPlayCircle className={HeroStyles.playIcon} />
                    <div className={HeroStyles.volumeControls}>
                        <ImVolumeMedium className={HeroStyles.icon}/>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Hero