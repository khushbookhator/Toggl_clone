import projstyles from "./project.module.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getTask } from "../../Redux/Title/action";

function Project() {

    const [sortProject, setSortProject] = React.useState(false)
    const proj = useSelector(state=> state.project.proj)
    const task = useSelector(state => state.tasks.task)
    const dispatch = useDispatch()
    const sortIt = () => {
        proj.sort((a,b) => 
            {if(b.project_name<a.project_name && sortProject){
                return 1
            }else {
                return -1
            }}
        )
        setSortProject(!sortProject)
    }
    useEffect(() => {
        dispatch(getTask())
    },[])


    return(
        <div className={projstyles.cont}>
            <div className={projstyles.first}>
                <h3>Projects</h3>
                <button>+ New Project</button>
            </div>
            <div className={projstyles.second}>
                <select value="Show Active">
                    <option>Active</option>
                    <option>Archived</option>
                    <option>Both</option>
                </select>
                <p>Filter by: </p>
                <button>
                    <img className={projstyles.imgs} src="https://img.icons8.com/?id=11797&size=2x&color=000000" alt="user"/>
                    Client
                </button>
                <button>
                    <img className={projstyles.imgs} src="https://img.icons8.com/?id=1366&size=2x&color=000000" alt="team"/>
                    Team
                </button>
                <button>
                    <img className={projstyles.imgs} src="https://img.icons8.com/metro/2x/contact-card.png" alt="name"/>
                    Project name
                </button>
            </div>
            <br/>
            <div className={projstyles.third}>
                <div style={{textAlign:"left", padding:"20px"}}>
                    <button className={projstyles.bulk}>Bulk edit</button>
                </div>
                    <div style={{
                        display:"flex",
                        width:"70%",
                        justifyContent:"space-evenly",
                        cursor:"pointer"
                    }}>
                        <div style={{
                            display:"flex",
                            gap:"10px",
                        }}  onClick={sortIt}><p>PROJECT</p> 
                            <p>{sortProject ? "⇣" : "⇡"}</p>
                        </div>
                        <div>CLIENT</div>
                        <div>STATUS</div>
                        <div>TEAM</div>
                    </div>
                    {
                        proj?.map((item) => 
                                <Link to={`/projects/${item.id}`}>
                                <div style={{
                                    display:"flex",
                                    height:"40px",
                                    width:"70%",
                                    justifyContent:"space-evenly"
                                }}>
                                    <div>{item.project_name}</div>
                                    <div>{item.client}</div>
                                    <div>{
                                        Math.floor((task.filter((items) => items.project_name === item.project_name).reduce((acc, b) => acc + b.total_time, 0))/3600)} h</div>
                                    <div>{item.team}</div>
                                </div>
                                </Link>
                        )
                    }
            </div>
        </div>
    )
}
export {Project}