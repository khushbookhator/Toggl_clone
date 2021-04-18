import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { auth } from "../Components/Login/firebase";
import { trackLogin } from "../Components/Login/userSlice";
import barstyles from "./bar.module.css"

function Sidebar() {
    const dispatch =useDispatch()
    const user = useSelector(state=>state.user.user)
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
          
            if(userAuth){
            dispatch(
              trackLogin(
                {   
                    photoUrl:userAuth.photoURL,
                    username:userAuth.displayName,
                    uid:userAuth.uid,
                    email:userAuth.email,
                }
              )
            );
            }
        });
    },[])
    return(
        <div className={barstyles.cont}>
            <div className={barstyles.panel}>
                <img src="https://raw.githubusercontent.com/toggl-open-source/toggldesktop/gh-pages/assets/toggl-track-wide.png" alt="logo" width="70%"/>
                <img style={{width:"20px", height:"20px", marginTop:"22px"}}
                src="https://img.icons8.com/metro/2x/ffffff/appointment-reminders.png" alt="notify" />
            </div>
            <p>TRACK</p>
            <div className={barstyles.outer}>
                <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/clock.png" alt="time"/>
                <NavLink className={barstyles.links} to="/timer">Timer</NavLink>
            </div>
            <p>ANALIZE</p>
            <div className={barstyles.outer}>
                <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/report-card.png" alt="report"/>
                <NavLink className={barstyles.links} to="/reports">Reports</NavLink>
            </div>
            <div className={barstyles.outer}>
                <img className={barstyles.icons} src="https://img.icons8.com/metro/2x/ffffff/combo-chart.png" alt="insight"/>
                <NavLink className={barstyles.links} to="/insights">Insights</NavLink>
            </div>
            <p>MANAGE</p>
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
            <p>WORKSPACE</p>
            <button onClick={()=>auth.signOut()}>Sign Out</button>
            <h1>{user.username}</h1>
            <img src={user.photoUrl} alt=""/>
        </div>
    )
}

export {Sidebar}