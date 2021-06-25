import React, { useCallback, useState } from 'react'
import { useStyles } from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useContext } from 'react';
import { ProjectContext } from '../Projects';
import {
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core'

  export default function ProjectMenu({id}) {
    const {removeProjectDialog, editProject} = useContext(ProjectContext)

    const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  }, []);
 
  const editItem = useCallback((event) => {
     event.stopPropagation()
     editProject(id)
     setAnchorEl(null)   
  }, [])

  const removeItem = useCallback((event) => {
    event.stopPropagation()
    removeProjectDialog(id)
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
