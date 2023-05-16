import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { urlForFile } from '@/sanity';
import PlayerStyles from '../../styles/components/Player.module.scss'

function Player({ mainPageData }) {
    const [hasWindow, setHasWindow] = useState(false);
    const videoUrl = urlForFile(mainPageData[0].playerUrl.asset._ref)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <>
            {videoUrl ? (
                hasWindow &&
                <div className={PlayerStyles.playerWrapper}  data-scroll-section id="about">
                    <ReactPlayer
                        className={PlayerStyles.reactPlayer}
                        url={videoUrl}
                        width='100%'
                        height='100%'
                        controls={true}
                        muted={true}
                    />
                </div>
            ) : (
                ""
            )
            }
            <div className="component">

            </div>
        </>

    )
}

export default Player