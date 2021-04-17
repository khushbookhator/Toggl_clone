import { DriveEtaRounded } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getTask } from "../../Redux/Title/action";


function ProgressLine () {
    const proj = useSelector(state=> state.project.proj)
    const task = useSelector(state => state.tasks.task)
    const dispatch = useDispatch()
    const total_time = task.reduce((acc, b) => acc + b.total_time, 0)
    useEffect(() => {
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
                proj.map((item) => 
                <> 
                    <div style={{
                        width: `${Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time)}%`,
                    }}>
                        <div>{Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time) > 0? item.project_name:null}</div>
                        <div style={{
                            backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`,
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