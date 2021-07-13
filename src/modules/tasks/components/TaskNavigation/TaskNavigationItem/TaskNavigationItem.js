import React, { useState } from "react";
import {Link} from 'react-scroll'
import {fetchActiveClass} from "../../../UI/tasksUI";
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles, withStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
     active: {
       backgroundColor: '#2196f3'
   }
})

export default function TaskNavigationItem({task}) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const active = useSelector(state => state.tasksUI.activeClass)

    const setActiveTask = (id) => {
        dispatch(fetchActiveClass(id))
    }
    const StyledTreeItem = withStyles({
      label: {
        "&:focus": {
          backgroundColor: "#2196f3",
          color: "#fff"
        },
        "&:active": {
          backgroundColor: "#2196f3",
          color: "#fff"
        },
        "&:hover": {
          backgroundColor: "#2196f3",
          color: "#fff"
        }
      }
    })(TreeItem);

    const renderTree = (task) => (
        <Link  
            onClick={() => setActiveTask(task.id)}
            activeClass="active" 
            to = {task.id }
            key={task.id} 
            smooth={true}
            spy={true}
            duration={250}
            containerId="container"
        >
          <StyledTreeItem 
             
              key={task.id} 
              nodeId={task.id} 
              label={task.name} 
           >
             { task.children && task.children.map((task) => renderTree(task))}
          </StyledTreeItem>
        </Link>
      );
    return (
        <>
          {renderTree(task)}
        </>
    );
}