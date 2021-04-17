import { PieChart } from 'react-minimal-pie-chart';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../Redux/Title/action';
import React from "react"
import { getProject } from '../../Redux/Project/action';
import piestyle from "./pie.module.css"

export function PieCrt(){

    const task = useSelector(state=> state.tasks.task)
    const total_time = task.reduce((acc, b) => acc + b.total_time, 0)
    const proj = useSelector(state=> state.project.proj)
    const dispatch=useDispatch()

    React.useEffect(() => {
        dispatch(getTask())
        dispatch(getProject())
    },[])
    return(
        <>
        <div className={piestyle.tablecont}>
            {
                <table >
                    <thead>
                        <tr className={piestyle.tableetr}>
                            <th className={piestyle.titletd}>TITLE</th>
                            <th className={piestyle.durationtd}>DURATION</th>
                            <th>PERCENTAGE</th>
                        </tr>
                    </thead>
                    <tbody  className={piestyle.tablebody}>
                        {
                            proj.map((item) => <tr className={piestyle.tableetr} key={item.id}>
                                <td  className={piestyle.titletd}>{item.project_name}</td>
                                <td  className={piestyle.durationtd}>{task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)}</td>
                                <td>{Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time)}%</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
        <div className={piestyle.piechrtcont}>
        <PieChart
            data={
                proj.map(item=>{return{title:item.project_name,value:Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time),color:`#${Math.floor(Math.random()*16777215).toString(16)}`}})
            }
            animate="true"
            lineWidth="40"
            radius="40"
        />
        </div>
          
        </>
    )
}

// data={[
//     { title: 'One', value: 25, color: '#E38627' },
//     { title: 'Two', value: 25, color: '#C13C37' },
//     { title: 'Three', value: 50, color: '#6A2135' },
// ]}