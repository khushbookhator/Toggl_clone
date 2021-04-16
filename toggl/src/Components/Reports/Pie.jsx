import { PieChart } from 'react-minimal-pie-chart';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../Redux/Title/action';
import React from "react"
import { getProject } from '../../Redux/Project/action';

export function PieCrt(){

    const[pie, setPie] = React.useState([])
    const task = useSelector(state=> state.tasks.task)
    const total_time = task.reduce((acc, b) => acc + b.total_time, 0)
    const proj = useSelector(state=> state.project.proj)

    const handlePie = () => {
       (proj.map((item) => console.log(task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time) )  
    }
    console.log(pie)


    const dispatch=useDispatch()
    React.useEffect(() => {
        dispatch(getTask())
        dispatch(getProject())
        handlePie()
    },[])
    return(
        <>
        <div>
            {
                <table>
                    <thead>
                        <tr>
                            <th>TITLE</th>
                            <th>DURATION</th>
                            <th>PERCENTAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            proj.map((item) => <tr>
                                <td>{item.project_name}</td>
                                <td>{task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)}</td>
                                <td>{Math.round((task.filter((items) => items.project_name.trim() === item.project_name).reduce((acc, b) => acc + b.total_time, 0)*100)/total_time)}%</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
        <PieChart
            data={[
                { title: 'One', value: 25, color: '#E38627' },
                { title: 'Two', value: 25, color: '#C13C37' },
                { title: 'Three', value: 50, color: '#6A2135' },
            ]}
            animate="true"
            lineWidth="40"
            radius="40"
        />  
        </>
    )
}
