import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCaretDown, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { LogoHome } from '../img_home/LogoHome';
import navStyles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [trStatus, setTrStatus] = React.useState(false);
    const [trAppStatus, setTrAppStatus] = React.useState(false);

    const handleTrToggle = () => {
        setTrStatus(!trStatus);
    }
    const handleAppToggle = () => {
        setTrAppStatus(!trAppStatus);
    }

    return (
        <div>
            <div className={navStyles.pinky}>
                <div>Back to Toggl Global</div>
                <div>Products ‎‎ {<FontAwesomeIcon icon={faCaretDown}/>} </div>
                <div>Blog</div>
                <div>Our mission</div>
                <div>Working at Toggl</div>
            </div>
            <div className={navStyles.nav}>
                <div className={navStyles.trlogo}>
                    <LogoHome />
                </div>
                <div>
                    <button className={`${navStyles.navLinks}`} onClick={handleTrToggle}>Why Track ? <span style={{marginLeft: "6px"}}>‎‎{trStatus ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</span> </button>
                </div>
                <div>
                    <button className={navStyles.navLinks}>Features</button>
                </div>
                <div>
                    <button className={navStyles.navLinks}>Pricing</button>
                </div>
                <div>
                    <button className={navStyles.navLinks} onClick={handleAppToggle}>Track Apps <span style={{marginLeft: "6px"}}> ‎‎{trAppStatus ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</span></button>
                </div>
                <div>
                    <button id={navStyles.hirng} className={navStyles.navLinks}>WE'RE HIRING</button>
                </div>
                <div>
                    <button id={navStyles.lognbtn} className={navStyles.navLinks}> <Link className={navStyles.lognnlink} to="/login">Log in </Link> <span style={{marginLeft: "6px"}}>{<FontAwesomeIcon icon={faCaretRight}/>}</span></button>
                </div>
                <div>
                    <button id={navStyles.tryForFree} className={navStyles.navLinks}>Try for free</button>
                </div>
            </div>
        </div>
    )
}