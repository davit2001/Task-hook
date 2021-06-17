import React from 'react'
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuLink,
  } from "@reach/menu-button";

 import { useStyles } from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useContext } from 'react';
import { TaskRemoveContext, TaskEditContext } from '../Tasks';

  export default function TaskMenu({id}) {
    const removeTask = useContext(TaskRemoveContext)
    const editTask = useContext(TaskEditContext)
    const classes = useStyles();
   
    return (
        <>
  <Menu>
      <MenuButton className={classes.menuButton} >
        <MoreVertIcon />
      </MenuButton>

    <MenuList className = {classes.menuList} >
          <MenuItem className="grey-highlight" onSelect = {() => editTask(id)}>
               Edit
          </MenuItem>
          <MenuLink to="view" className="grey-highlight" onSelect ={() => removeTask(id)}>
              Delete
          </MenuLink>
      </MenuList>
  </Menu>
        </>
    )
}
