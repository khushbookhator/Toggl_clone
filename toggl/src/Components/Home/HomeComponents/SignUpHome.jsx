import React from 'react'
import backimage from '../img_home/screencaptureTogglTrack20210414141940.png';
import signHomeStyles from './SignUpHome.module.css';

export const SignUpHome = () => {
    return (
        <div>
            <div className={signHomeStyles.mainCont}>
                <img src={backimage} alt="preview" />
            </div>
            <div className={signHomeStyles.mainContCheck}>
                <input type="checkbox" name="homeAgree" id="checkIt"/>
                <label htmlFor="checkIt">I agree to the terms of service and privacy policy.</label>
            </div>
        </div>
        )
}
