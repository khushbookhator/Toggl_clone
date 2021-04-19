import { DriveEtaRounded } from "@material-ui/icons"
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getProject } from "../../Redux/Project/action"
import { getTask } from "../../Redux/Title/action"


function ProgressLine () {
    const proj = useSelector(state=> state.project.proj)
    const task = useSelector(state => state.tasks.task)
    const dispatch = useDispatch()
    const total_time = task.reduce((acc, b) => acc + b.total_time, 0)
    const colors = ["#3096DF", "#412A4C", "#CECECE", "#E57CD8", "#422A4C", "#DFDFFF", "#FFE4A7", "violet", "lightskyblue", "mediumslateblue", "palevioletred", "rebeccapurple", "black", "tomato", "red"]
    useEffect(()=>{
        dispatch(getProject())
        dispatch(getTask())
    },[])
    return(
        <>
            <div style={{
                width:"95%",
                margin:"auto",
                marginTop:"20px",
                height:"8px",
                display:"flex",
                gap:"2px"
            }}>
            {
                proj?.map((item) => 
                <> 
                    <div style={{
                        width: `${Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time)}%`,
                    }}>
                        <div>{Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time) > 0? item.project_name:null}</div>
                        <div style={{
                            backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
                            borderRadius:"5px",
                            height:"4px"
                        }}></div>
                    </div>
                </>
                )
            }
            </div>
        </>
    )
}

export {ProgressLine}


// `${task.filter((items) => items.project_name.trim() === item.project_name?item.project_name.trim():null)[0]!==undefined||task.filter((items) => items.project_name.trim() === item.project_name?item.project_name.trim():null)[0]!==null?item.project_name:null}`