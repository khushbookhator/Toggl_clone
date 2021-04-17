import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { getTime } from '../../Utils/timeFormat';
import { Link } from 'react-router-dom';
import { deleteTask } from '../../Redux/Title/action';
import timerstyles from "./timer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';


function TimerData() {
    const task = useSelector(state=> state.tasks.task)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    var obj = {}
    task.forEach((i) => {
        if(obj[i.date]){
            obj[i.date].push(i)
        }else {
            obj[i.date] =[i] 
        }
    })
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDelete=(id)=>{
        handleClose()
        dispatch(deleteTask(id))
    }

    const handleHover = (i) => {
        document.getElementById(i).style.backgroundColor = "rgb(243, 243, 243);";
        document.getElementById(`${i}dot3btn`).style.visibility = "visible";
        document.getElementById(`${i}tagWalaIcon`).style.visibility = "visible";
        document.getElementById(`${i}dollarWalaIcon`).style.visibility = "visible";
    }
    const handleLeave = (i) => {
        document.getElementById(i).style.backgroundColor = "#fff"
        document.getElementById(`${i}dot3btn`).style.visibility = "hidden";
        document.getElementById(`${i}tagWalaIcon`).style.visibility = "hidden";
        document.getElementById(`${i}dollarWalaIcon`).style.visibility = "hidden";
    }


    return(
        <>
            {
                Object.keys(obj).map((itemss, i) => 
                <>
                    <div>{itemss}</div>
                    <div>{
                        getTime(task?.filter((it) => it.date === itemss).reduce((acc, b) => acc + b.total_time, 0))
                        }</div>
                    {
                        task?.filter((items) => items.date === itemss).map((item) => {return(
                            <div id={i} onMouseLeave={() => handleLeave(i)} onMouseOver={() => handleHover(i)} className={timerstyles.DownnContentMain} key={item.id} style={{
                                display:"flex",
                                justifyContent:"space-evenly",
                                cursor:"pointer"
                            }}>
                                <div className={timerstyles.titleDownnContent}>{item.title}</div>
                                <div className={timerstyles.projectNameContent}> {<FontAwesomeIcon style={{opacity:"0.5", fontSize:"7px", marginRight:"5px"}} icon={faCircle}/>} {item.project_name.toUpperCase()}</div>
                                <div id={`${i}tagWalaIcon`} class={timerstyles.taggContentIcon}><img src="https://img.icons8.com/plumpy/24/000000/price-tag.png" alt="preview"/></div>
                                <div class={timerstyles.dollarContentIcon} id={`${i}dollarWalaIcon`}>{<FontAwesomeIcon icon={faDollarSign}/>}</div>
                                <div className={timerstyles.titleTimeContent}>{`${item.start_time}-${item.end_time}`}</div>
                                <div className={timerstyles.totalTimeContent}>{getTime(item.total_time)}</div>
        
        
                                <div>
                                    <IconButton
                                    id={`${i}dot3btn`}
                                        className={timerstyles.dot3btn}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                        >
                                        <MoreVertIcon />
                                    </IconButton>
                                    
                                    <Menu
                                        style={{marginTop:"50px",marginRight:"30px"}}
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}>
                                        <MenuItem onClick={()=>handleDelete(item.id)}>
                                          Delete
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                          <Link to="/projects">Go to project</Link>
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            )})
                    }
                </>
                )
            }
        </>
    )
}

export {TimerData}
