import React from 'react'
import { useSelector } from 'react-redux'
import {Container, Grid, Typography} from '@material-ui/core'
import TaskNavigationItem from '../TaskNavigationItem/TaskNavigationItem'

export default function TaskNavigationList({projectId}) {
    const tasks = useSelector((state) => state.tasks.tasks.filter(task => task.projectId == projectId))
     return (
        <Container>
            <Grid item>
            <Typography variant = "h4" gutterBottom>
                       Navigation
            </Typography>
            {tasks.length ?tasks.map(task => (
                <TaskNavigationItem task = {task}/>
            )): <Typography variant = "body1">
                 Tasks does not exist
                </Typography>}
            </Grid>
        </Container>
    )
}