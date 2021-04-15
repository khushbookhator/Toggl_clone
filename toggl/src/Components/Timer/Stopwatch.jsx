import React, { useEffect, useRef, useState } from "react"
import stylesStopwatch from "./stopwatch.module.css"

export const StopWatch=()=>{
    const [time,setTime] =useState(0)
    const [status,setStatus] =useState(false)
    const x = useRef()
    const handleStart=()=>{
        if(status){
            return
        }
        x.current=setInterval(()=>{
            setTime((prev)=>prev+1)
        },1000)
        setStatus(true)
        localStorage.setItem("timer",Date.now())
        localStorage.setItem("startTime", Date.now())
    };
    useEffect(()=>{
        let a =Number(Date.now())-JSON.parse(localStorage.getItem("timer"))
        if(JSON.parse(localStorage.getItem("timer"))===undefined||JSON.parse(localStorage.getItem("timer"))===null){
            setTime(0)
        }else{
            setTime(Math.floor(a/1000))
        }
        if(JSON.parse(localStorage.getItem("timer"))>0){
            x.current=setInterval(()=>{
                setTime((prev)=>prev+1)
            },1000)
            setStatus(true)
        }
    },[window.onload])
    const getTime=(seconds)=>{
        const sec = seconds % 60;
        const min = Math.floor(seconds/60)%60;
        const hrs = Math.floor(seconds/(60*60))
        return `${hrs} : ${min>9?min:"0"+min} : ${sec>9?sec:"0"+sec}`
    }
    const handleReset=()=>{
        localStorage.setItem("totalTime",Math.floor((Number(Date.now())-JSON.parse(localStorage.getItem("timer")))/1000))
        localStorage.setItem("endTime", Date.now())
        localStorage.removeItem("timer")
        setTime(0)
        clearInterval(x.current)
        setStatus(false)
    }
    return(
        <div className={stylesStopwatch.container}>
            <h3>{getTime(time)}</h3>
            <div onClick={status?handleReset:handleStart}>{status?<img style={{width:"35px"}} src="https://www.freeiconspng.com/uploads/red-music-stop-icon-25.jpg" alt="" />:<img style={{width:"35px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GRjfCIiUn3HDSwYl1ivUNi9-_obig2b_YNB1xZHPcG-HtUFyb2HaX0bDBVvdzd9phuU&usqp=CAU" alt="" />}</div>
        </div>
    )
}