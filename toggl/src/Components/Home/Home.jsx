import React from 'react'
import { Navbar } from './HomeComponents/Navbar'
import { HomeVideo } from './HomeComponents/HomeVideo'
import { TimeIsMoney } from './HomeComponents/TimeIsMoney'
import { WhyTogglHome } from './HomeComponents/WhyTogglHome'
import { FeaturesVideoHome } from './HomeComponents/FeaturesVideoHome'
import { SignUpHome } from './HomeComponents/SignUpHome'
import { Footer } from './HomeComponents/Footer'

export const Home = () => {
    return (
        <div style={{minHeight:"100vh", minWidth:"100vw"}}>
            <Navbar/>
            <HomeVideo/>
            <TimeIsMoney/>
            <WhyTogglHome/>
            <FeaturesVideoHome/>
            <SignUpHome/>
            <Footer/>
        </div>
    )
}
