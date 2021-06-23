import React, { useCallback, useMemo, useState } from 'react'
import {
  Container,
  Grid,
  IconButton,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import TaskList from './TaskList/TaskList'
import FormDialog from './Dialog/FormDialog';
import TaskDialog from './Dialog/TaskDialog';
import { useStyles } from './styles';
import { v4 as uuid } from 'uuid';
import Tooltip from './Tooltip/Tooltip'

export const TaskRemoveContext = React.createContext('')
export const TaskEditContext = React.createContext('')

const imageUrl = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'

export default function Tasks() {
    const classes = useStyles()

    const [editId, setEditId] = useState(null)
    const [removeId, setRemoveId] = useState('')
    const [isOpenDialog, setOpenDialog] = useState(false)
    const [isOpenForm, setOpenForm] = useState(false)

    const [tasks, setTasks] =  useState([{
      id: uuid(),
      title: 'project 1',
      message: 'message 1',
      image: imageUrl 
   },{ 
       id: uuid(),
       title: 'project 2',
       message: 'message 2',
      image: imageUrl 
   },{ 
       id: uuid(),
       title: 'project 3',
       message: 'message 3',
      image: imageUrl
   },{ 
       id: uuid(),
       title: 'project 4',
       message: 'message 4',
      image: imageUrl 
  }])



  const addTask = useCallback((title, message, image) => {
    setTasks([
        ...tasks, 
        {
            id: uuid(),
            title, 
            message, 
            image
        }
    ])
  }, [tasks])

  const removeTaskDialog = useCallback((id) => {
      setRemoveId(id)
      setOpenDialog(true)
  }, [])

  const removeTask = useCallback(() => {
    setOpenDialog(false)
    let data = tasks.filter( task => task.id !== removeId)
    setTasks(data)
    setRemoveId(null)
  }, [removeId])

  const updateTask = useCallback((id, title, message, image = imageUrl) => {
     const data = tasks.filter(task => {
        if (task.id === id)  { 
            task.title = title
            task.message = message  
            task.image = image
          } 
          return  task; 
     })
     setTasks(data)
     setEditId('')
  }, [tasks])

  const editTask = useCallback((id) => {
      setEditId(id)
      setOpenForm(true)
 }, [])

 let task = useMemo(() => tasks.find(task => task.id == editId), [editId])
  return (
    <Container className = {classes.root}>
        <Grid  className = {classes.container} >
             <Grid item >
                  <IconButton className = {classes.iconButton} onClick = {() => setOpenForm(true)} >
                        <AddIcon />
                   </IconButton>
                 <TaskRemoveContext.Provider value = {removeTaskDialog}>
                      <TaskEditContext.Provider value = {editTask}>
                           <TaskList tasks = {tasks}/>
                      </TaskEditContext.Provider>
                 </TaskRemoveContext.Provider>
             </Grid>
        </Grid > 

          <TaskDialog 
              isOpenDialog = {isOpenDialog}
              setOpenDialog = {setOpenDialog}
              removeTask = {removeTask}
          />

            <FormDialog 
             isOpenForm = {isOpenForm} 
             setOpenForm = {setOpenForm}
             addTask = {addTask}
             updateTask = {updateTask}
             task = {task}
            />
     </Container>
    );
}
