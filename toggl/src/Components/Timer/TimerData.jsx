
import { useSelector } from 'react-redux';


function TimerData() {
    const getTime=(seconds)=>{
        const sec = seconds % 60;
        const min = Math.floor(seconds/60)%60;
        const hrs = Math.floor(seconds/(60*60))
        return `${hrs} : ${min>9?min:"0"+min} : ${sec>9?sec:"0"+sec}`
    }

    const task = useSelector(state=> state.tasks.task)
    return(
        <>
            {
                task?.map((item) => 
                    <div key={item.id} style={{
                        display:"flex",
                        justifyContent:"space-evenly"
                    }}>
                        <p>{item.title}</p>
                        <p>{item.project_name}</p>
                        <p>{`${item.start_time}-${item.end_time}`}</p>
                        <p>{getTime(item.total_time)}</p>
                    </div>
                )
            }
        </>
    )
}

export {TimerData}