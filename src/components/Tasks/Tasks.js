import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {
  Grid, 
  Typography,
  IconButton
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import { useParams } from 'react-router-dom'
import { fetchToggleTaskForm } from '../../action/tasksUI'; 
import TasksProjectInfo from './TasksProjectInfo/TasksProjectInfo';
import TaskFormDialog from './hoc/Dialog/FormDialog'
import TaskList from '../Tasks/TaskList/TaskList'
import TaskDialog from './hoc/Dialog/TaskDialog'
import TaskSearch from './TaskSearch/TaskSearch'
import TaskNavigationList from './TaskNavigation/TaskNavigationList/TaskNavigationList'
import { useStyles } from './styles'
import { fetchTaskSearch } from '../../action/tasks';

export const TaskContext = React.createContext('')

export default function Tasks() {
  const classes = useStyles()
  const params = useParams()
  let projectId =  params.id; 
  
  useEffect(() => {
    dispatch(fetchTaskSearch(null))
  }, [projectId])
  
  
  const dispatch = useDispatch()

  return (
    <>
       <TasksProjectInfo projectId = {projectId}/>

        <IconButton onClick = {() => dispatch(fetchToggleTaskForm(true))} className = {classes.iconButton}  >
             <AddIcon />
        </IconButton>

           <Grid 
                container   
                direction="row"
                justify="center"
                alignItems="stretch"
            >
             <Grid item className={classes.item}>
                  <TaskNavigationList projectId = {projectId}/>
               </Grid>
              
              <Grid item className={classes.item} >
                 <Typography variant = "h4" gutterBottom>
                    Task Details
                  </Typography>
                  <TaskList  projectId = {projectId}/>
               </Grid>

              <Grid item className={classes.item} >
                  <TaskSearch />
              </Grid>

              <TaskDialog />
              <TaskFormDialog projectId = {projectId}/>
          </Grid>
        </>
    )
}