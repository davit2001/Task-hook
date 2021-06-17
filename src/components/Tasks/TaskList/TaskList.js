import { Grid} from '@material-ui/core'
import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { useStyles } from './styles';

export default function TaskList({tasks}) {
    const classes = useStyles();
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

