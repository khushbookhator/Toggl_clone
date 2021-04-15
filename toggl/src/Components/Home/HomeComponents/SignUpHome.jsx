import React from 'react'
import { AppleLogoHome } from '../img_home/AppleLogoHome';
import { EmailLogoHome } from '../img_home/EmailLogoHome';
import { GoogleLogoHome } from '../img_home/GoogleLogoHome';
import backimage from '../img_home/screencaptureTogglTrack20210414141940.png';
import signHomeStyles from './SignUpHome.module.css';

export const SignUpHome = () => {
    return (
        <div style={{height:"83vw"}}>
            <div className={signHomeStyles.mainCont}>
                <img src={backimage} alt="preview" />
            </div>
            <div className={signHomeStyles.mainContCheck}>
                <input type="checkbox" name="homeAgree" id="checkIt"/>
                <label htmlFor="checkIt">I agree to the <span>terms of service</span> and <br/> <span>privacy policy.</span> </label>
            </div>
            <div className={signHomeStyles.sinupBtnHome}>
                <button> {<GoogleLogoHome/>} Sign up via Google</button>
                <button> {<AppleLogoHome/>} Sign up via Apple</button>
            </div>
            <div className={signHomeStyles.sinupBtnEmail}>
                <button> {<EmailLogoHome/>} or sign up via email</button>
            </div>
            <div className={signHomeStyles.talkToSales}>
                <button>Talk to Sales</button>
            </div>
        </div>
        )
}
