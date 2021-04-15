import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import timeStyles from './TimeIsMoney.module.css';
import tedaHai from '../img_home/tedaHai.png'

export const TimeIsMoney = () => {
    return (
        <div className={timeStyles.main}>
            <div className={timeStyles.headd}>Time Is Money. <br /> Toggl Track Saves You <em>Both</em> </div>
            <div className={timeStyles.headdPara}>Whether you're a team of one or a team of one thousand, Toggl Track is all about saving you time and money—and from anxiety</div>
            <div className={timeStyles.headdImgFlex}>
                <div><img data-gatsby-image-ssr="" sizes="(max-width: 525px) 450px, 353px" data-main-image="" style={{ objectFit: "contain", opacity: '1' }} decoding="async" loading="lazy" alt="Toggl Track for freelancers" src="https://public-assets.toggl.com/b/static/aad1422f0f6b8130589bc0a5452e2245/3605f/track-for-freelancers.png" srcset="https://public-assets.toggl.com/b/static/aad1422f0f6b8130589bc0a5452e2245/8af42/track-for-freelancers.png 88w,https://public-assets.toggl.com/b/static/aad1422f0f6b8130589bc0a5452e2245/7328f/track-for-freelancers.png 177w,https://public-assets.toggl.com/b/static/aad1422f0f6b8130589bc0a5452e2245/3605f/track-for-freelancers.png 353w,https://public-assets.toggl.com/b/static/aad1422f0f6b8130589bc0a5452e2245/2016b/track-for-freelancers.png 706w" />
                </div>
                <div>
                    <img data-gatsby-image-ssr="" sizes="(max-width: 525px) 450px, 353px" data-main-image="" style={{ objectFit: "contain", opacity: '1' }} decoding="async" loading="lazy" alt="Toggl Track for small teams" src="https://public-assets.toggl.com/b/static/09a73dce28dd6941ba65f46441b07dec/e7e2e/track-for-small-teams.png" srcset="https://public-assets.toggl.com/b/static/09a73dce28dd6941ba65f46441b07dec/4614a/track-for-small-teams.png 88w,https://public-assets.toggl.com/b/static/09a73dce28dd6941ba65f46441b07dec/ec065/track-for-small-teams.png 177w,https://public-assets.toggl.com/b/static/09a73dce28dd6941ba65f46441b07dec/e7e2e/track-for-small-teams.png 353w,https://public-assets.toggl.com/b/static/09a73dce28dd6941ba65f46441b07dec/39039/track-for-small-teams.png 706w" />
                </div>
                <div>
                    <img data-gatsby-image-ssr="" sizes="(max-width: 525px) 450px, 353px" data-main-image="" style={{ objectFit: "contain", opacity: '1' }} decoding="async" loading="lazy" alt="Toggl Track for large teams" src="https://public-assets.toggl.com/b/static/73b8d9f0971e2e725d36afcad2336b3f/cfd91/track-for-large-teams.png" srcset="https://public-assets.toggl.com/b/static/73b8d9f0971e2e725d36afcad2336b3f/4614a/track-for-large-teams.png 88w,https://public-assets.toggl.com/b/static/73b8d9f0971e2e725d36afcad2336b3f/4054c/track-for-large-teams.png 177w,https://public-assets.toggl.com/b/static/73b8d9f0971e2e725d36afcad2336b3f/cfd91/track-for-large-teams.png 353w,https://public-assets.toggl.com/b/static/73b8d9f0971e2e725d36afcad2336b3f/8e415/track-for-large-teams.png 706w" />
                </div>
            </div>
            <div className={timeStyles.headdParaFlex}>
                <div> <strong> FREELANCERS</strong> <br /><br />Flying solo? That means you're the CEO of Everything, including time. See what Toggl Track can do for Empires of One! <p>Learn more {<FontAwesomeIcon icon={faCaretRight}/>}</p> </div>
                <div> <strong>SMALL TEAMS </strong> <br /> <br />Toggl Track is your all-in-one time expert. You’ll be ready the next time anyone asks, "What have you done this month?" <p>Learn more {<FontAwesomeIcon icon={faCaretRight}/>}</p> </div>
                <div> <strong>LARGE TEAMS </strong> <br /><br /> Big teams need time tracking that can keep up. Analyze your time and whip your workweek into shape with Toggl Track <p>Learn more {<FontAwesomeIcon icon={faCaretRight}/>}</p> </div>
            </div>
            <div id={timeStyles.tediImg}><img src={tedaHai} alt="preview"/></div>
        </div>
    )
}

