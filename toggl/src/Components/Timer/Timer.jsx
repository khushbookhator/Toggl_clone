import React, { useEffect, useState } from "react";
import { StopWatch } from "./Stopwatch";
import timerstyles from "./timer.module.css"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch , useSelector} from "react-redux";
import { getProject, postProject } from './../../Redux/Project/action';
import { TimerData } from "./TimerData";
import { getTask } from "../../Redux/Title/action";
import { getTime } from "../../Utils/timeFormat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function  getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "20px",
    outline:"none"
  },
}));



export const Timer=()=>{
    const [text,settext] = useState("")
    const [dummy, setDummy] = useState("")
    const [projectName,setProjectName] = useState("")
    const [createProjectName,setCreateProjectName] = useState("")
    const [open, setOpen] = useState(false);
    const [colorNum, setColorNum] = useState("");
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    
    const payload = {
        title: text
    }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const proj = useSelector(state => state.project.proj)

    const dispatch = useDispatch();

    const colorList = ["#33A7FF", "red", "limegreen",  "#E57CD8", "blue", "purple", "teal", "orange", "pink", "lightskyblue", "green", "brown", "violet", "maroon", "khaki", "blue", "red"];

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
    const task = useSelector(state=> state.tasks.task)
    React.useEffect(() => {
        dispatch(getProject())
        dispatch(getTask())
    },[])

    return(
        <div className={timerstyles.bgpage}>
            <div className={timerstyles.container}>
                <div  className={timerstyles.inp}>
                    <input placeholder="What are you working on?" type="text" value={text} onChange={(e)=>settext(e.target.value)} />
                </div>
                <div id={timerstyles.creatediv}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                            <Button style={{marginTop:"15px",background:"none"}} {...bindTrigger(popupState)}>
                                {dummy.length > 0 ? <span style={{color:`${colorList[colorNum]}`}}> {<FontAwesomeIcon style={{marginRight:"4px"}} className={timerstyles.golaa} icon={faCircle}/>} {dummy}</span> : <img src="https://img.icons8.com/?id=842&size=2x&color=000000" alt="projects" width="20px"/>}
                            </Button>
                            <Menu style={{marginTop:"40px", marginLeft:"-70px", height:"1000px", fontSize:"10px"}} {...bindMenu(popupState)}>
                                <MenuItem><input list="SearchBox" name="SearchBox" className={timerstyles.inpProjName} type="text" placeholder='Search' value={projectName} onChange={(e)=>setProjectName(e.target.value)}/></MenuItem>
                                <MenuItem style={{backgroundColor:"#d3d3d3b8", fontSize:"13px", borderRadius:"10px", marginLeft:"10px", marginRight:"10px", marginTop:"10px"}} onClick={() => {setDummy(""); popupState.close()}}> {<FontAwesomeIcon style={{fontSize:"8px", marginRight:"10px"}} icon={faCircle}/>} No Project</MenuItem>
                                <div style={{fontSize:"11px", marginLeft:"25px", marginTop:"20px", fontWeight:"bold"}}>NO CLIENT</div>
                                {
                                    proj.map((item, i) => 
                                        <MenuItem style={{color:`${colorList[i]}`, fontSize:"14px", fontWeight:"400"}} key = {item.id} onClick={(e) => {setDummy(e.target.textContent);
                                            popupState.close();
                                            setColorNum(i);
                                        }}> {<FontAwesomeIcon className={timerstyles.golaa} icon={faCircle}/>} {item.project_name}</MenuItem>
                                    )
                                }
                                <hr style={{marginBottom:"2px"}} />
                                <MenuItem style={{fontSize:"13px", paddingBottom:"0px", marginBottom:"0px", fontWeight:"400", marginLeft:"40px", paddingTop:"0px"}} className={timerstyles.crPrJct} onClick={() => {popupState.close(); handleOpen()}}> <span>+</span>Create a new project</MenuItem>
                            </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <div>
                                <p style={{marginTop:"0px", fontWeight:"500", fontSize:"14px"}}>Create new project {<FontAwesomeIcon style={{marginLeft:"150px"}} icon={faTimes}/>}</p>
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
                                <button style={{cursor:"pointer" , width:"100%", backgroundColor:"#E57CD8", padding:"10px 20px", color:"white", borderRadius:"8px", border:"none", marginTop:"35px"}} onClick={handlePostProj}>Create Project</button>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className={timerstyles.tagicon}>
                    <img src="https://img.icons8.com/plumpy/24/000000/price-tag.png" alt="preview"/>
                </div>
                <div className={timerstyles.doler}>
                    <p>$</p>
                </div>
                <div>
                    <StopWatch title={text} projname = {dummy}/>
                </div>
            </div>
            <div className={timerstyles.dayPart}>
                <h5 style={{marginLeft:"20px", fontSize:"15px", fontWeight:"500"}}>Today</h5>
                <p style={{marginRight:"40px"}}>
                    {
                        getTime(task.reduce((acc, b) => acc + b.total_time, 0))
                    }
                </p>
            </div>
            <div>
                <TimerData/>
            </div>


        </div>
    )
}