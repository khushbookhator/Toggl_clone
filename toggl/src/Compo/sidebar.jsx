import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { auth } from "../Components/Login/firebase";
import { trackLogin, trackLogout } from "../Components/Login/userSlice";
import barstyles from "./bar.module.css"

function Sidebar() {
    const dispatch =useDispatch()
    const isAuth = useSelector(store=>store.user.isAuth)
    const userEmail = useSelector(store=>store.user.userData.email)
    const userName = useSelector(store=>store.user.userData.displayName)
    const profilePic = useSelector(store=>store.user.userData.photoURL)
    const userData = useSelector(store=>store.user.userData)
    console.log(userData)
    const handleLogout=()=>{
        dispatch(trackLogout())
    }
    return(
        <div className={barstyles.cont}>
            <div className={barstyles.cont1}>
                <div className={barstyles.panel}>
                    <img src="https://raw.githubusercontent.com/toggl-open-source/toggldesktop/gh-pages/assets/toggl-track-wide.png" alt="logo" width="70%"/>
                    <img style={{width:"20px", height:"20px", marginTop:"22px"}}
                    src="https://img.icons8.com/metro/2x/ffffff/appointment-reminders.png" alt="notify" />
                </div>
            </div>
            <div className={barstyles.cont2}>
                <p className={barstyles.para}>TRACK</p>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/clock.png" alt="time"/>
                    <NavLink className={barstyles.links} to="/timer">Timer</NavLink>
                </div>
                <p className={barstyles.para}>ANALIZE</p>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/report-card.png" alt="report"/>
                    <NavLink className={barstyles.links} to="/reports">Reports</NavLink>
                </div>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/combo-chart.png" alt="insight"/>
                    <NavLink className={barstyles.links} to="/insights">Insights</NavLink>
                </div>
                <p className={barstyles.para}>MANAGE</p>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/folder-invoices.png" alt="report"/>
                    <NavLink className={barstyles.links} to="/projects">Projects</NavLink>
                </div>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/user-male.png" alt="insight"/>
                    <NavLink className={barstyles.links} to="/client">Client</NavLink>
                </div>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/conference-call.png" alt="insight"/>
                    <NavLink className={barstyles.links} to="/team">Team</NavLink>
                </div>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} style={{transform:"rotate(270deg)"}} src="https://img.icons8.com/metro/2x/ffffff/price-tag.pnghttps://img.icons8.com/metro/2x/ffffff/price-tag.png" alt="insight"/>
                    <NavLink className={barstyles.links} to="/atgs">Tags</NavLink>
                </div>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/settings.png" alt="insight"/>
                    <NavLink className={barstyles.links} to="/settings">Settings</NavLink>
                </div>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/help.png" alt="insight"/>
                    <NavLink className={barstyles.links} to="/help">Help</NavLink>
                </div>
                <div className={barstyles.outer}>
                    <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/membership-card.png" alt="insight"/>
                    <NavLink className={barstyles.links} to="/subscription">Subscription</NavLink>
                </div>
            </div>
            <div className={barstyles.cont3}>
                <p className={barstyles.para}>WORKSPACE</p>
                <div style={{
                    display:"flex",
                    gap:"2px",
                    height:"40px"
                }}>
                    <img style={{
                        borderRadius:"50%",

                    }} src={profilePic} alt=""/>
                    <p style={{
                        color:"white",
                        marginTop:"5px"
                    }}>{userName}</p>
                </div>
                    <button style={{
                        background:"transparent",
                        width:"80%",
                        color:"white",
                        margin:"auto",
                        marginTop:"8px",
                        border:"1px solid white",
                        borderRadius:"5px",
                        height:"35px"
                    }} onClick={handleLogout}>Sign Out</button>
            </div>
        </div>
    )
}

export {Sidebar}