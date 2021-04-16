import projstyles from "./project.module.css"
import { useEffect } from 'react';
import { getIndividualProject } from './../../Redux/Project/action';
import { useParams } from "react-router";
import { useDispatch , useSelector} from "react-redux";
import { getTime } from './../../Utils/timeFormat';

function IndividualProject() {

    const task = useSelector(state => state.tasks.task)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getIndividualProject(id))
    },[])

    const individual = useSelector(state => state.project.individual)
    console.log(individual)

    return(
        <div className={projstyles.cont}>
            <div className={projstyles.first}>
                <h3>Projects</h3>
                <p>{`>`}</p>
                <p>{individual.project_name}</p>
                <button>Edit Project</button>
            </div>
            <div className={projstyles.second}>
                <p>DASHBOARD</p>
                <p>TEAM</p>
            </div>
            <br/><br/>
            <p>Only team members can see this project. You can make it visible to everyone or only to you. Privacy settings</p>
            <br/>
            <div>
                <div>
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
                    <h3>PROJECT OVERVIEW</h3>
                    <h5>CLOCKED HOURS</h5>
                    <h1>
                        {
                            getTime(task.filter((items) => items.project_name === individual.project_name).reduce((acc, b) => acc + b.total_time, 0))
                        }
                    </h1>
                </div>
            </div>
        </div>
        //(task.filter((items) => items.project_name === item.project_name).reduce((acc, b) => acc + b.total_time, 0))
    )
}
export {IndividualProject}