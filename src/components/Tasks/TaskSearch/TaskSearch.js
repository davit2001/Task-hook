import React from 'react'
import { Typography} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import { useSelector } from 'react-redux';
import TaskSearchForm from './TaskSearchForm/TaskSearchForm';
import TaskSearchItem from './TaskSearchItem/TaskSearchItem';
import { searchTasksSelector } from '../../../reducer/taskReducer';

export default function TaskSearch() {
   const tasks =  useSelector(searchTasksSelector())

    return (
        <Grid >
            <Grid item>
            <Typography variant = "h4" gutterBottom>
                    Search
            </Typography>
              <TaskSearchForm />
            </Grid>
            <Grid item>
                {tasks.length !== 0 && tasks.map(task => (
                          <TaskSearchItem task = {task}/>
                     ))
                }
            </Grid>
        </Grid>
    )
}