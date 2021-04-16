import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { postTask , getTask} from "../../Redux/Title/action"
import { getTime } from "../../Utils/timeFormat"
import stylesStopwatch from "./stopwatch.module.css"

export const StopWatch=({title, projname})=>{
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
        const startT = new Date()
        const st = startT.getHours() + ':' + startT.getMinutes();
        localStorage.setItem("startTime", st)
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
        dispatch(getTask())
    },[window.onload])
    
    
    const dispatch = useDispatch()
    
    const handleReset=()=>{
        localStorage.setItem("totalTime",Math.floor((Number(Date.now())-JSON.parse(localStorage.getItem("timer")))/1000))
        const endT = new Date()
        const et = endT.getHours() + ':' + endT.getMinutes();
        localStorage.setItem("endTime", et)
        localStorage.removeItem("timer")
        setTime(0)
        clearInterval(x.current)
        setStatus(false)

        const today = new Date()
        const date = today.getFullYear()+"-" + (today.getMonth() + 1) + '-' + today.getDate();
        const payload = {
            title: title,
            date : date,
            start_time: localStorage.getItem("startTime"),
            end_time:localStorage.getItem("endTime"),
            total_time: JSON.parse(localStorage.getItem("totalTime")),
            project_name: projname,
            subtitle: [
                {
                    task_time: 0,
                    task_title:""
                }
            ]
        }
        dispatch(postTask(payload)).then(dispatch(getTask()))
    }
    return(
        <div className={stylesStopwatch.container}>
            <h3>{getTime(time)}</h3>
            <div onClick={status?handleReset:handleStart}>{status?<img style={{width:"35px"}} src="https://www.freeiconspng.com/uploads/red-music-stop-icon-25.jpg" alt="" />:<img style={{width:"35px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GRjfCIiUn3HDSwYl1ivUNi9-_obig2b_YNB1xZHPcG-HtUFyb2HaX0bDBVvdzd9phuU&usqp=CAU" alt="" />}</div>
        </div>
    )
}