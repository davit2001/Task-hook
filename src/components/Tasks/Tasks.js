import React, { useMemo } from 'react'
import {Container, Grid} from '@material-ui/core'
import TaskForm from './form/TaskForm'
import TaskList from './TaskList/TaskList'
import { useState } from 'react';
import { useStyles } from './styles';

export const TaskRemoveContext = React.createContext('')
export const TaskEditContext = React.createContext('')

const imageUrl = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'

export default function Tasks() {
    const classes = useStyles()
    const [tasks, setTasks] =  useState([{
      id: 1,
      title: 'task 1',
      message: 'message 1',
      image: imageUrl 
   },{ 
       id: 2,
       title: 'task 2',
       message: 'message 2',
      image: imageUrl 
   },{ 
       id: 3,
       title: 'task 3',
       message: 'message 3',
      image: imageUrl
   },{ 
       id: 4,
       title: 'task 4',
       message: 'message 4',
      image: imageUrl 
  }])

  const [id, setId] = useState(null)

  const addTask = (title, message, image) => {
    setTasks([
        ...tasks, 
        {
            id: Math.floor(Math.random() * 1000),
            title, 
            message, 
            image
        }
    ])
  }

  const removeTask = (id) => {
    let data = tasks.filter( task => task.id !== id)
    setTasks(data)
  }

  const updateTask = (id, title, message, image) => {
     const data = tasks.filter(task => {
        if (task.id === id)  { 
            task.title = title
            task.message = message  
            task.image = image
          } 
          return  task; 
     })
     setTasks(data)
     setId('')
  }

  const editTask = (id) => {
      setId(id)
 }

 let task = useMemo(() => tasks.find(task => task.id == id), [id])
 
    return (
      <Container>
          <div className = {classes.container}>
            <Grid item >
                <TaskRemoveContext.Provider value = {removeTask}>
                     <TaskEditContext.Provider value = {editTask}>
                           <TaskList tasks = {tasks}/>
                     </TaskEditContext.Provider>
                </TaskRemoveContext.Provider>
            </Grid>

            <Grid item >
               <TaskForm 
                   addTask = {addTask}
                   editTask = {editTask}
                   updateTask = {updateTask}
                   task = {task}
                  />
            </Grid>
          </div> 
     </Container>
    );
}
