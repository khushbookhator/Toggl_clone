import React from 'react'
import { Navbar } from './HomeComponents/Navbar'
import { HomeVideo } from './HomeComponents/HomeVideo'
import { TimeIsMoney } from './HomeComponents/TimeIsMoney'
import { WhyTogglHome } from './HomeComponents/WhyTogglHome'
import { FeaturesVideoHome } from './HomeComponents/FeaturesVideoHome'

export const Home = () => {
    return (
        <div style={{minHeight:"100vh", minWidth:"100vw", marginLeft:"95px"}}>
            <Navbar/>
            <HomeVideo/>
            <TimeIsMoney/>
            <WhyTogglHome/>
            <FeaturesVideoHome/>
        </div>
    )
}
