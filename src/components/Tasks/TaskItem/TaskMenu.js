import React, { useCallback, useState } from 'react'
import { useStyles } from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useContext } from 'react';
import { TaskRemoveContext, TaskEditContext } from '../Tasks';
import {
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core'

  export default function TaskMenu({id}) {
    const removeTaskDialog = useContext(TaskRemoveContext)
    const editTask = useContext(TaskEditContext)

    const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);
 
  const editItem = useCallback(() => {
     editTask(id)
     setAnchorEl(null)   
  }, [])

  const removeItem = useCallback(() => {
    removeTaskDialog(id)
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
                    onClose={handleClose}
                  >
                  <MenuItem onClick={editItem}>Edit</MenuItem>
                  <MenuItem onClick={removeItem}>Remove</MenuItem>
                </Menu>
        </>
    )
}
