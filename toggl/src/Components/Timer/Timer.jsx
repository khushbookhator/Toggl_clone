import React, { useEffect, useState } from "react";
import { StopWatch } from "./Stopwatch";
import timerstyles from "./timer.module.css"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
    const payload = {
        title: text
    }




export const Timer=()=>{
    const [text,settext] = useState("")
    const [projectName,setProjectName] = useState("")
    const [createProjectName,setCreateProjectName] = useState("")

    const [open, setOpen] = useState(false);
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

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
                            <Button variant="contained" style={{marginTop:"15px",background:"none"}} {...bindTrigger(popupState)}>
                            📁
                            </Button>
                            <Menu style={{marginTop:"40px"}} {...bindMenu(popupState)}>
                                <MenuItem><input type="text" value={projectName} onChange={(e)=>setProjectName(e.target.value)}/></MenuItem>
                                <MenuItem onClick={popupState.close,handleOpen}>Create a project</MenuItem>
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
                                <p>Create new project</p>
                            </div>
                            <div>
                                <div>
                                    <input type="text" name="createProjectName" value={createProjectName} onChange={(e)=>setCreateProjectName(e.target.value)}/>
                                </div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                            <div>
                                <select name="Workspace">
                                    <option value="username">Ayush</option>
                                </select>
                            </div>
                            <div>
                                <select name="Client">
                                    <option value="username">Ayush</option>
                                </select>
                            </div>
                            <div>
                                <label>Private Project</label>
                                <input type="checkbox"/>
                            </div>
                            <div>
                                <button>Create Project</button>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className={timerstyles.tagicon}>
                    <img src="https://img.icons8.com/plumpy/24/000000/price-tag.png"/>
                </div>
                <div className={timerstyles.doler}>
                    <p>$</p>
                </div>
                <div>
                    <StopWatch/>
                </div>
            </div>



        </div>
    )
}








// export default function SimpleModal() {
  
//   const body = (
    
//   );

//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>
//         Open Modal
//       </button>
      
//     </div>
//   );
// }




