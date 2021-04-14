import React, { useEffect, useState } from "react";
import { StopWatch } from "./Stopwatch";
import timerstyles from "./timer.module.css"


export const Timer=()=>{
    const [text,settext] = useState("")



    return(
        <div className={timerstyles.bgpage}>
            <div className={timerstyles.container}>
                <div  className={timerstyles.inp}>
                    <input placeholder="What are you working on?" type="text" value={text} onChange={(e)=>settext(e.target.value)} />
                </div>
                <div className={timerstyles.creatediv}>
                    <p>+ Create a project</p>
                </div>
                <div className={timerstyles.tagicon}>
                    <img src="https://img.icons8.com/plumpy/24/000000/price-tag.png"/>
                </div>
                <div className={timerstyles.doler}>
                    <p>$</p>
                </div>
                <div>
                    <StopWatch/>
                </div>
            </div>
            dl;asjdl;asjdlk
            sdka;sk
            <h1>dsada</h1>
            <h1>dsada</h1>
            <h1>dsada</h1>

            {/* buttompart */}


        </div>
    )
}
















// const [somer,setsome]=useState([])
// const req=()=>{
//     return axios.get("https://api.track.toggl.com/api/v8/me",{
//         headers:{
//             "Authorization": `Basic ${btoa("bdd051fe3ab4075cf2bf402620d3b6eb:api_token")}`
//         }
//     }).then(res=>setsome(res.data))
// }
// useEffect(()=>{
//     req()
// },[])
// console.log(btoa("bdd051fe3ab4075cf2bf402620d3b6eb:api_token"))
// console.log(somer)