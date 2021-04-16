import projstyles from "./project.module.css"
import { useEffect } from 'react';
import { getIndividualProject } from './../../Redux/Project/action';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTime } from './../../Utils/timeFormat';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function IndividualProject() {

    const task = useSelector(state => state.tasks.task)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getIndividualProject(id))
    }, [])

    const individual = useSelector(state => state.project.individual)
    console.log(individual)

    return (
        <div className={projstyles.cont}>
            <div className={projstyles.first}>
                <h3 style={{ fontSize: "16px" }}>Projects <span style={{ marginLeft: "5px" }}>{`>`}</span> <span> {<FontAwesomeIcon style={{ fontSize: "7px", paddingBottom: "3px", marginLeft: "5px" }} icon={faCircle} />} {individual.project_name}</span> </h3>
                <button>Edit Project</button>
            </div>
            <div className={projstyles.second}>
                <p>Dashboard</p>
                <p style={{ fontWeight: "bold" }}>Team</p>
            </div>
            <br style={{ marginBottom: "0px" }} />
            <p style={{ marginTop: "0px", fontSize: "14px", fontWeight: "400", marginLeft: "20px" }}>Only team members can see this project. You can make it visible to everyone or only to you. <span style={{ borderBottom: "2px solid purple", color: "purple", cursor: "pointer" }}> Privacy settings</span></p>
            <br />
            <div className={projstyles.whiterDiv}>
                <div>
                    <div>
                        <button>+ Add Member</button>
                    </div>
                    <div className={projstyles.allMembRole}>
                        <p>ALL MEMBERS/GROUPS</p>
                        <p style={{ marginRight: "250px" }}>ROLE</p>
                    </div>
                    <div className={projstyles.allMembRole}>
                        <p>get name from login</p>
                        <p style={{ marginRight: "250px" }}>MANAGER</p>
                    </div>
                </div>
            </div>
            <div className={projstyles.projClocked}>
                <h3 id={projstyles.overProjView}>PROJECT OVERVIEW</h3>
                <h5 id={projstyles.clckHour}>CLOCKED HOURS</h5>
                <p id={projstyles.clckHourTiming}>
                    {
                        getTime(task.filter((items) => items.project_name === individual.project_name).reduce((acc, b) => acc + b.total_time, 0))
                    }
                </p>
            </div>
        </div>
        //(task.filter((items) => items.project_name === item.project_name).reduce((acc, b) => acc + b.total_time, 0))
    )
}
export { IndividualProject }