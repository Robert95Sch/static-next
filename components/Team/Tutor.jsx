import React from 'react'
import Image from 'next/image'

import { urlFor } from '@/sanity.js'

import TutorStyles from '../../styles/components/Tutor.module.scss'

function Tutor({ image, name, sub }) {
    return (
        <div className={TutorStyles.tutor}>
            <div className={TutorStyles.imageContainer}>
                <Image
                    src={urlFor(image).url()}
                    alt="Tutor Image"
                    fill
                    blurDataURL="URL"
                    placeholder="blur"
                />
            </div>
            <h1 className={TutorStyles.tutorName}>{name}</h1>
            <h4 className={TutorStyles.tutorSub}>{sub}</h4>
        </div>
    )
}

export default Tutor