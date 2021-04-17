import projstyles from "./project.module.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getTask } from "../../Redux/Title/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

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

    const handleHover = (i) => {
        document.getElementById(i).style.backgroundColor = "rgb(243, 243, 243)";
        document.getElementById(`${i}dot3btnProj`).style.visibility = "visible";
    }
    const handleLeave = (i) => {
        document.getElementById(i).style.backgroundColor = "#fff"
        document.getElementById(`${i}dot3btnProj`).style.visibility = "hidden";
    }


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
                    <div className={projstyles.headingProjsXYZ} style={{
                        display:"flex",
                        width:"100%",
                        justifyContent:"space-evenly"
                    }}>
                        <div style={{
                            display:"flex",
                            gap:"10px"
                        }}  onClick={sortIt}><div>PROJECT</div> 
                            <div>{sortProject ? "⇣" : "⇡"}</div>
                        </div>
                        <div style={{marginLeft:"270px"}}>CLIENT</div>
                        <div>STATUS</div>
                        <div style={{marginRight:"50px"}}>TEAM</div>
                    </div>
                    {
                        proj?.map((item, i) => 
                                <Link style={{textDecoration:"none"}} to={`/projects/${item.id}`}>
                                <div onMouseLeave={() => handleLeave(i)} onMouseOver={() => handleHover(i)} id={i} className={projstyles.fetchcontentXYZ} style={{
                                    display:"flex",
                                    height:"40px",
                                    width:"100%",
                                    justifyContent:"space-evenly",
                                    borderBottom:"1px solid #8080806e",
                                    verticalAlign: "middle",
                                    alignItems: "center"
                                }}>
                                    <div> {<FontAwesomeIcon style={{fontSize:"8px", marginRight:"10px", opacity:"0.5"}} icon={faCircle}/>} {item.project_name}</div>
                                    <div style={{marginLeft:"290px"}}>{item.client}</div>
                                    <div>{
                                        Math.floor((task.filter((items) => items.project_name === item.project_name).reduce((acc, b) => acc + b.total_time, 0))/3600)} h</div>
                                    <div>{item.team}</div>
                                    <span id={`${i}dot3btnProj`} className={projstyles.dot3btnProj}><FontAwesomeIcon icon={faEllipsisV}/></span>
                                </div>
                                </Link>
                        )
                    }
            </div>
        </div>
    )
}
export {Project}