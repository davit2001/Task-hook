import React, { useCallback, useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useContext } from 'react';
import { TaskContext } from '../Tasks';
import {
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core'

  export default function ProjectMenu({id}) {
    const {closeProjectDialog, editProject} = useContext(TaskContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback((event) => {
      event.stopPropagation()
       setAnchorEl(event.currentTarget);
    }, []);
 
  const editItem = useCallback(() => {
     editProject(id)
     setAnchorEl(null)   
  }, [])

  const removeItem = useCallback(() => {
    closeProjectDialog(id)
    setAnchorEl(null)
  })
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <>
              <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                   <MoreVertIcon />
              </IconButton>

                  <Menu
                    id= {id}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClick = {(event) => event.stopPropagation()}
                    onClose={handleClose}
                  >
                  <MenuItem onClick={editItem}>Edit</MenuItem>
                  <MenuItem onClick={removeItem}>Remove</MenuItem>
                </Menu>
        </>
    )
}
