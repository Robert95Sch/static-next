import React from 'react'

import Image from 'next/image'

import { HiOutlineVideoCamera } from 'react-icons/hi'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

import FeaturetteStyles from '../styles/components/Featurette.module.scss'
import { baskerVille, leagueSpartan, serifPro } from '@/util/fonts'

function Featurette() {
    return (
        <div className={FeaturetteStyles.container}>
            <div className={FeaturetteStyles.wrapper}>
                <div className={FeaturetteStyles.left}>
                    <div className={FeaturetteStyles.header}>
                        <h1>Get the Best Lessons with the Best Tutors</h1>
                        <p className={serifPro.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        <button className={leagueSpartan.className}>Get Started</button>
                    </div>
                    <div className={FeaturetteStyles.contents}>
                        <div className={FeaturetteStyles.info}>
                            <div className={FeaturetteStyles.iconHolder}>
                                <HiOutlineVideoCamera />
                            </div>
                            <h4>Learn from the comfort of home</h4>
                            <p className={serifPro.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className={FeaturetteStyles.link}>
                                <a className={serifPro.className}>Book a lesson</a>
                                <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.3536 4.35355C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464466C17.9763 0.269204 17.6597 0.269204 17.4645 0.464466C17.2692 0.659728 17.2692 0.976311 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53553C17.6597 7.7308 17.9763 7.7308 18.1716 7.53553L21.3536 4.35355ZM0 4.5H21V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div className={FeaturetteStyles.info}>
                            <div className={FeaturetteStyles.iconHolder}>
                                <HiOutlineVideoCamera />
                            </div>
                            <h4>Learn from the comfort of home</h4>
                            <p className={serifPro.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className={FeaturetteStyles.link}>
                                <a className={serifPro.className}>Book a lesson</a>
                                <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.3536 4.35355C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464466C17.9763 0.269204 17.6597 0.269204 17.4645 0.464466C17.2692 0.659728 17.2692 0.976311 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53553C17.6597 7.7308 17.9763 7.7308 18.1716 7.53553L21.3536 4.35355ZM0 4.5H21V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={FeaturetteStyles.right}>
                    <Image
                        src="/images/featurette-image.png"
                        fill
                        alt="Featurette Image"
                    />
                </div>
            </div>
        </div>
    )
}

export default Featurette