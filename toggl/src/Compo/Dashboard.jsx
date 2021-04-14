import { Timer } from "../Components/Timer/Timer";
import { Sidebar } from "./sidebar";


function Dashboard(){
    return(
        <div style={{
            display:"flex"
        }}>
            <Sidebar/>
            <Timer/>
        </div>
    )
}

export {Dashboard}