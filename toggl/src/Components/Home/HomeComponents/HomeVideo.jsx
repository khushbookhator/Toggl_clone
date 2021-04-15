import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import videostyles from './HomeVideo.module.css';

export const HomeVideo = () => {
    return (
        <div>
            <div>
                <video id={videostyles.myVideo} autoPlay={true} muted loop>
                    <source src="https://public-assets.toggl.com/b/static/bg-video-track-8f4af7937b64aa487d47cc93ba1f5a9d.mp4" type="video/mp4" />
                </video>
                <div className={videostyles.contentTextHome}>
                    <div id={videostyles.contentHead}>
                        With Toggl Track, time tracking is a piece of <em> cake</em>
                    </div>
                    <div id={videostyles.contentHeadPara}>
                        The world's best time tracking software for individuals and businesses
                    </div>
                    <div id={videostyles.contentHeadGetStarted}>
                        <button>Get started for free</button>
                        <span>Talk to Sales <span>{<FontAwesomeIcon icon={faCaretRight}/>} </span></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
