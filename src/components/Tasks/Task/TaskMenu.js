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
export default function TaskMenu() {
    const classes = useStyles();
    return (
        <>
    <Menu>
      <MenuButton className={classes.menuButton} >
        <MoreVertIcon />
      </MenuButton>

      <MenuList className = {classes.menuList} >
          <MenuItem className="grey-highlight" >
              Edit
          </MenuItem>

          <MenuLink to="view" className="grey-highlight">
            Delete
          </MenuLink>

      </MenuList>
    </Menu>
        </>
    )
}
