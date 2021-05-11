import { PieChart } from 'react-minimal-pie-chart';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../Redux/Title/action';
import React from "react"
import { getProject } from '../../Redux/Project/action';
import piestyle from "./pie.module.css"
import { getTime } from './../../Utils/timeFormat';

export function PieCrt(){

        const task = useSelector(state=> state.tasks.task)
        const total_time = task.reduce((acc, b) => acc + b.total_time, 0)
        const proj = useSelector(state=> state.project.proj)
        const dispatch=useDispatch()
        const colors = ["#3096DF", "#412A4C", "#CECECE", "#E57CD8", "#422A4C", "#DFDFFF", "#FFE4A7", "violet", "lightskyblue", "mediumslateblue", "palevioletred", "rebeccapurple", "black", "tomato", "red"]
    React.useEffect(() => {
        dispatch(getTask())
        dispatch(getProject())
    },[dispatch])
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
                                <td  className={piestyle.durationtd}>{getTime(task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0))}</td>
                                <td>{Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time)}%</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
        <div>
            <p style={{marginLeft:"30px", marginBottom:"5px", fontWeight:"600"}}>WEEKLY</p>
            <h3 style={{marginLeft:"30px", marginBottom:"5px"}}>
                {
                    getTime(task.reduce((acc, b) => acc + b.total_time, 0))
                }
            </h3>
        </div>
        <div className={piestyle.piechrtcont}>
        <PieChart
            data={
                proj.map(item=>{return{title:item.project_name,value:Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time),color:`${colors[Math.floor(Math.random() * colors.length)]}`}})
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