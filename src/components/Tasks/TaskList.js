import { Grid} from '@material-ui/core'
import React, { useState } from 'react'
import TaskItem from './Task/TaskItem'
import { useStyles } from './styles';

export default function TaskList() {
    const classes = useStyles();

   const [tasks, setTasks] =  useState([{
        id: 1,
        text: 'task 1',
        message: 'message 1',
        image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
     },{ 
         id: 1,
         text: 'task 2',
         message: 'message 2',
        image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
     },{ 
         id: 1,
         text: 'task 3',
         message: 'message 3',
        image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
     },{ 
         id: 1,
         text: 'task 4',
         message: 'message 4',
        image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
    }])
    
    return (
        <Grid container spacing = {4} className = {classes.container}>
            {tasks.map(task => (
                <Grid key = {task.id} item>
                   <TaskItem key = {task.id} task = {task}/>
                </Grid>
            ))}
        </Grid>
    )
}

