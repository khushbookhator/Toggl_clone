import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import backgroundFeatureHome from '../img_home/screencaptureTogglTrack20210414113046.png'
import featuresVideoHomeStyles from './FeaturesVideoHome.module.css';

export const FeaturesVideoHome = () => {
    return (
        <div style={{height:"187vw", width:"100vw"}}>
            <div className={featuresVideoHomeStyles.mainn}>
                <img src={backgroundFeatureHome} alt="preview" />
            </div>
            <div id={featuresVideoHomeStyles.pupleReadMore}>
                <span>Read More {<FontAwesomeIcon icon={faCaretRight} />}</span>
            </div>
            <div id={featuresVideoHomeStyles.orangeReadMore}>
                <span>Read More {<FontAwesomeIcon icon={faCaretRight} />}</span>
            </div>
            <div id={featuresVideoHomeStyles.startTracking}>
                <button>Start tracking for free</button>
            </div>
            <div id={featuresVideoHomeStyles.startTrackingOrRead}>
                <button>Or read more success stories {<FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faCaretRight} />}</button>
            </div>
            <div id={featuresVideoHomeStyles.watch1min}>
                <button>Watch 1min video</button>
            </div>
        </div>
    )
}
