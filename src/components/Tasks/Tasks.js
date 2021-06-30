import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Grid, 
  Typography,
  IconButton
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import { useParams } from 'react-router-dom'
import {fetchTaskUpdate, fetchTaskRemove} from '../../action/tasks'
import TasksProjectInfo from './TasksProjectInfo/TasksProjectInfo';
import TaskFormDialog from '../Tasks/Dialog/TaskFormDialog'
import TaskList from '../Tasks/TaskList/TaskList'
import TaskDialog from './Dialog/TaskDialog'
import TaskSearch from './TaskSearch/TaskSearch'
import TaskNavigationList from './TaskNavigation/TaskNavigationList/TaskNavigationList'
import { useStyles } from './styles'
import { tasksSelector } from '../../reducer/tasks/tasksReducer';
import { fetchTaskSearch } from '../../action/tasks';

export const TaskContext = React.createContext('')

export default function Tasks() {
  const dispatch = useDispatch()
  const params = useParams()
  let projectId =  params.id; 

   useEffect(() => {
     dispatch(fetchTaskSearch(null))
   }, [projectId])
  
  const tasks = useSelector(tasksSelector())

   const [editId, setEditId] = useState(null)
   const [removeId, setRemoveId] = useState(null)
   const [isOpenDialog, setOpenDialog] = useState(false)
   const [isOpenForm, setOpenForm] = useState(false)

   
const closeProjectDialog = useCallback((id) => {
    setRemoveId(id)
    setOpenDialog(true)
}, [])

const removeProject = useCallback(() => {
  setOpenDialog(false)
  dispatch(fetchTaskRemove(removeId))
  setRemoveId(null)
}, [removeId])

const updateTask = useCallback((data) => {
   dispatch(fetchTaskUpdate(data))
   setEditId('')
}, [tasks])

const editProject = useCallback((id) => {
    setEditId(id)
    setOpenForm(true)
}, [tasks])

  let task = useMemo(() => tasks.find(task => task.id == editId), [editId])
  const classes = useStyles()
  return (
    <>
       <TasksProjectInfo projectId = {projectId}/>

        <IconButton onClick = {() => setOpenForm(true)} className = {classes.iconButton}  >
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
                  <TaskContext.Provider value = {{
                           closeProjectDialog,
                           editProject
                    }}>
                      <TaskList  projectId = {projectId}/>
                   </TaskContext.Provider> 
              </Grid>

              <Grid item className={classes.item} >
                  <TaskSearch />
              </Grid>

              <TaskDialog 
                isOpenDialog = {isOpenDialog}
                setOpenDialog = {setOpenDialog}
                removeProject = {removeProject}
             />
              <TaskFormDialog 
                 isOpenForm = {isOpenForm} 
                 setOpenForm = {setOpenForm}
                 projectId = {projectId}
                 editId = {editId}
                 updateTask = {updateTask}
                 task = {task}
             />
          </Grid>
        </>
    )
}