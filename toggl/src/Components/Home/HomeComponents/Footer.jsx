import React from 'react';
import { FacebookIconHome } from '../img_home/FacebookIconHome';
import { GitHubIconHome } from '../img_home/GitHubIconHome';
import discImage from '../img_home/discoveryChannel.png';
import { InstagramIconHome } from '../img_home/InstagramIconHome';
import { LinkedinIconHome } from '../img_home/LinkedinIconHome';
import futImg from '../img_home/toglaa.png';
import { TwitterIconHome } from '../img_home/TwitterIconHome';
import { YouTubeIconHome } from '../img_home/YouTubeIconHome';
import futerStyles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={futerStyles.mainn}>
            <div className={futerStyles.futImg}>
                <img src={futImg} alt="preview" />
            </div>
            <div className={futerStyles.outerFlex}>
                <div className={futerStyles.innerFlex}>
                    <h4>TOGGL GLOBAL</h4>
                    <li>Blog</li>
                    <li>Our Mission</li>
                    <li>Working at Toggl <span>13</span></li>
                    <li>Legal Terms</li>
                </div>
                <div className={futerStyles.innerFlex}>
                    <h4>PRODUCT</h4>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Integrations</li>
                    <li>Case Studies</li>
                    <li>API</li>
                </div>
                <div className={futerStyles.innerFlex}>
                    <h4>DOWNLOAD</h4>
                    <li>Mobile Apps</li>
                    <li>Desktop Apps</li>
                    <li>Browser Extensions</li>
                </div>
                <div className={futerStyles.innerFlex}>
                    <h4>HELP</h4>
                    <li>Support & Knowledge Base</li>
                    <li>Request A Demo</li>
                    <li>Contact Us</li>
                </div>
            </div>
            <div id={futerStyles.Resss} className={futerStyles.innerFlex}>
                <h4>RESOURCES</h4>
                <li>Work From Home Hub</li>
                <li>Business Resources</li>
                <li>Productivity Resources</li>
                <li>Media Kit</li>
            </div>
            <div className={futerStyles.iconsFlex}>
                <TwitterIconHome />
                <FacebookIconHome />
                <InstagramIconHome />
                <YouTubeIconHome />
                <LinkedinIconHome />
                <GitHubIconHome />
            </div>
            <div className={futerStyles.outerDisc}>
                <div className={futerStyles.discImg} style={{ width: "100%" }}>
                    <img width="100%" src={discImage} alt="preview" />
                </div>
                <div id={futerStyles.beauty}>Beautifully simple planning</div>
                <div id={futerStyles.intell}>Intelligent candidate-screening</div>
            </div>
            <div className={futerStyles.pinkky}>
                © 2021 Toggl. All rights reserved.
            </div>
        </div>
    )
}