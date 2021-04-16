import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';

export function PieCrt(){

    const task = useSelector(state=> state.tasks.task)
    const total_time = task.reduce((acc, b) => acc + b.total_time, 0)
    

    return(
     
        <PieChart
            data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
            ]}
            animate="true"
            lineWidth="40"
            radius="40"
        />  
    )
}
