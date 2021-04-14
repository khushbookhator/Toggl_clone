import React from 'react';
import whyTogglStyles from './WhyTogglHome.module.css';

export const WhyTogglHome = () => {
    return (
        <div className={whyTogglStyles.main}>
            <div className={whyTogglStyles.headd}>Why Toggl Track?</div>
            <div className={whyTogglStyles.whyzGrid}>
                <div>
                    <div className={whyTogglStyles.imgDiv}><img src="data:image/png;base64,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" alt="Finger snapping icon" loading="lazy"/></div>
                    <div className={whyTogglStyles.imgText}>
                        <h4>Low barrier to entry</h4>
                        <p>Intuitive time tracking to get you and your team onboard without a hitch</p>
                    </div>
                </div>
                <div>
                    <div className={whyTogglStyles.imgDiv}>
                        <img src="data:image/png;base64,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" alt="Reporting icon" loading="lazy"/>
                    </div>
                    <div className={whyTogglStyles.imgText}>
                        <h4>Insightful reporting</h4>
                        <p>Data from all projects and users are aggregated into a single dashboard</p>
                    </div>
                </div>
                <div>
                    <div className={whyTogglStyles.imgDiv}><img src="data:image/png;base64,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" alt="Mobile and desktop icon" loading="lazy"/></div>
                    <div className={whyTogglStyles.imgText}>
                        <h4>Works where you work</h4>
                        <p>Track your time via our web, desktop or mobile apps, or inside your favorite apps (100+ integrations)</p>
                    </div>
                </div>
                <div>
                    <div className={whyTogglStyles.imgDiv}><img src="https://public-assets.toggl.com/b/static/icon-reminder-aa141581dc5f0e8fe75fde089f80a2a8.png" alt="Reminders icon" loading="lazy"/></div>
                    <div className={whyTogglStyles.imgText}>
                        <h4>Tracking reminders</h4>
                        <p>Outsource the nagging to us with tracking reminders and required fields</p>
                    </div>
                </div>
                <div>
                    <div className={whyTogglStyles.imgDiv}><img src="https://public-assets.toggl.com/b/static/icon-shield-6df90037682ebfa7bce64f5da1923433.png" alt="Security icon" loading="lazy"/></div>
                    <div className={whyTogglStyles.imgText}>
                        <h4>Security-savvy</h4>
                        <p>We stay compliant with the latest regulatory developments</p>
                    </div>
                </div>
                <div>
                    <div className={whyTogglStyles.imgDiv}><img src="https://public-assets.toggl.com/b/static/icon-speech-9d7ecf8e2978fe960484fedad4e12917.png" alt="Speech icon" loading="lazy"/></div>
                    <div className={whyTogglStyles.imgText}>
                        <h4>Stellar support</h4>
                        <p>Our support team has a track record of getting back to you within 3 hours!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
