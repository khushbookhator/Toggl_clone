import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { getTime } from '../../Utils/timeFormat';
import { Link } from 'react-router-dom';
import { deleteTask, getTask } from '../../Redux/Title/action';
import { getProject } from '../../Redux/Project/action';


function TimerData() {
    const task = useSelector(state=> state.tasks.task)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
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


    return(
        <>
            {
                task?.map((item) => 
                    {return(
                    <div key={item.id} style={{display:"flex",justifyContent:"space-evenly"}}>
                        <p>{item.title}</p>
                        <p>{item.project_name}</p>
                        <p>{`${item.start_time}-${item.end_time}`}</p>
                        <p>{getTime(item.total_time)}</p>
                        <div>
                            <IconButton
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
                    )}
                )
            }
        </>
    )
}

export {TimerData}
