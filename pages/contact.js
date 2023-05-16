import React from 'react'
import dynamic from 'next/dynamic'

import AltLayout from '@/components/AltLayout.jsx'

const Contact = dynamic(() => import('@/components/Contact.jsx'))

function contact() {
    return (
        <>
            <AltLayout>
                <Contact />
            </AltLayout>
        </>
    )
}

export default contact