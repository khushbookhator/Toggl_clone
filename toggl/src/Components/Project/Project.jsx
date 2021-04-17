import projstyles from "./project.module.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getTask } from "../../Redux/Title/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEllipsisV, faSearch, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from '@material-ui/core/Modal';
import {getModalStyle, useStyles} from '../Timer/Timer';
import { getProject, postProject } from './../../Redux/Project/action';



function Project() {
    const [createProjectName,setCreateProjectName] = React.useState("")
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [sortProject, setSortProject] = React.useState(false);
    const [activation, setActivation] = React.useState(false);
    const [projSearch, setProjSearch] = React.useState("");
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

    const handleInpput = () => {
        if(document.getElementById("proj123").style.display === "none"){
            document.getElementById("proj123").style.display= "block";
        }else{
            document.getElementById("proj123").style.display= "none";
        }
    }

    const handleSearchQuery = (e) => {
        const {value} = e.target;
        setProjSearch(value);
    }

    const handleSearchDisplay = () => {
        setActivation(true);
    }
    const handlePostProj= () => {
        const payload = {
            project_name : createProjectName,
            client: "",
            time: 0,
            team:"ayush"
        }
        dispatch(postProject(payload)).then(() => dispatch(getProject()))
        handleClose()
    }


    return(
        <div className={projstyles.cont}>
            <div className={projstyles.first}>
                <h3>Projects</h3>
                <button onClick={() => handleOpen()}>+ New Project</button>
            </div>
            <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <div>
                            <p style={{marginTop:"0px", fontWeight:"500", fontSize:"14px"}}>Create new project {<FontAwesomeIcon onClick={handleClose} style={{marginLeft:"150px", outline:"none"}} icon={faTimes}/>}</p>
                            </div>
                            <div>
                                <div>
                                <input style={{borderRadius:"10px", width:"245px", height:"26px", border:"1px solid black", padding:"5px 15px", fontSize:"15px"}} placeholder="Project name" type="text" name="createProjectName" value={createProjectName} onChange={(e)=>setCreateProjectName(e.target.value)}/>
                                </div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                            <div>
                            <select style={{width:"92%", marginTop:"15px", height:"30px", borderRadius:"8px", paddingLeft:"10px", outline:"none"}} name="Workspace">
                                    <option value="username">Ayush</option>
                                </select>
                            </div>
                            <div>
                            <select style={{width:"92%", marginTop:"15px", height:"30px", borderRadius:"8px", paddingLeft:"10px", outline:"none", paddingRight:"5px"}} name="Client">
                                    <option value="username">Ayush</option>
                                </select>
                            </div>
                            <div style={{marginTop:"10px"}}>
                                <label>Private project {<FontAwesomeIcon style={{opacity:"0.7", marginLeft:"5px"}} icon={faInfoCircle}/>}</label>
                                <input style={{marginLeft:"145px"}} type="checkbox"/>
                            </div>
                            <div>
                                <button style={{cursor:"pointer" ,width:"100%", backgroundColor:"#E57CD8", padding:"10px 20px", color:"white", borderRadius:"8px", border:"none", marginTop:"35px"}} onClick={handlePostProj}>Create Project</button>
                            </div>
                        </div>
                    </Modal>
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
                <button onClick={handleInpput}>
                    <img className={projstyles.imgs} src="https://img.icons8.com/metro/2x/contact-card.png" alt="name"/>
                    Project name {activation && <FontAwesomeIcon onClick={() => setActivation(false)} icon={faTimes}/>}
                </button>
                <div className={projstyles.searchInput} id="proj123">
                    <input type="text" value={projSearch} onChange={handleSearchQuery} name="query" id="proj"/>
                    <button style={{border:"none", backgroundColor:"transparent", outline:"none"}} onClick={handleSearchDisplay}>{<FontAwesomeIcon style={{color:"#E57CD8", fontSize:"15px"}} icon={faSearch}/>}</button>
                </div>
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
                    { activation ? (
                        proj?.filter(item => item.project_name.includes(projSearch)).map((item, i) => 
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
                    ) : (
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
                        ))}
                    
            </div>
        </div>
    )
}
export {Project}