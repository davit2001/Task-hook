import React, { useState } from 'react'
import { Typography} from '@material-ui/core';
import {Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import TaskSearchForm from './TaskSearchForm/TaskSearchForm';
import TaskSearchItem from './TaskSearchItem/TaskSearchItem';

export default function TaskSearch() {
    const classes = useStyles()
   const tasks =  useSelector(state => state.tasks.searchTasks)
   
    return (
        <Grid >
            <Grid item>
            <Typography variant = "h4" gutterBottom>
                    Search
            </Typography>
              <TaskSearchForm />
            </Grid>
            <Grid item>
                {tasks.length ? tasks.map(task => (
                          <TaskSearchItem task = {task}/>
                ))  : (
                    <Typography variant = "body1">
                       empty
                    </Typography>
                    )
                }
            </Grid>
        </Grid>
    )
}
