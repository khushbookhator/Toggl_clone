import projstyles from "./project.module.css"
import { useEffect } from 'react';
import { getIndividualProject } from './../../Redux/Project/action';
import { useParams } from "react-router";
import { useDispatch , useSelector} from "react-redux";
import { getTime } from './../../Utils/timeFormat';
import { getTask } from "../../Redux/Title/action";

function IndividualProject() {

    const task = useSelector(state => state.tasks.task)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getIndividualProject(id))
        dispatch(getTask())
    },[])

    const individual = useSelector(state => state.project.individual)

    return(
        <div className={projstyles.cont}>
            <div className={projstyles.first}>
                <div className={projstyles.inside}>
                    <h3>Projects</h3>
                    <h3>{`>`}</h3>
                    <h3>{individual.project_name}</h3>
                </div>
                <button>Edit Project</button>
            </div>
            <div className={projstyles.second}>
                <p>DASHBOARD</p>
                <p>TEAM</p>
            </div>
            <br/>
            <p>Only team members can see this project. You can make it visible to everyone or only to you. Privacy settings</p>
            <br/>
            <div className={projstyles.times}>
                <div className={projstyles.details}>
                    <div>
                        <button>+ Add Member</button>
                    </div>
                    <div>
                        <p>ALL MEMBERS/GROUPS</p>
                        <p>ROLE</p>
                    </div>
                    <div>
                        <p>get name from login</p>
                        <p>MANAGER</p>
                    </div>
                </div>
                <div>
                    <h4>PROJECT OVERVIEW</h4>
                    <h5>CLOCKED HOURS</h5>
                    <p className={projstyles.showtime}>
                        {
                            getTime(task.filter((items) => items.project_name.trim() === individual.project_name).reduce((acc, b) => acc + b.total_time, 0))
                        }
                    </p>
                </div>
            </div>
        </div>
        //(task.filter((items) => items.project_name === item.project_name).reduce((acc, b) => acc + b.total_time, 0))
    )
}
export {IndividualProject}