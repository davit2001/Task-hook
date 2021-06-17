import React, { useMemo } from 'react'
import {Container, Grid} from '@material-ui/core'
import TaskForm from './form/TaskForm'
import TaskList from './TaskList/TaskList'
import { useState } from 'react';
import { useStyles } from './styles';
import { v4 as uuid } from 'uuid';

export const TaskRemoveContext = React.createContext('')
export const TaskEditContext = React.createContext('')

const imageUrl = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'

export default function Tasks() {
    const classes = useStyles()
    const [tasks, setTasks] =  useState([{
      id: uuid(),
      title: 'task 1',
      message: 'message 1',
      image: imageUrl 
   },{ 
       id: uuid(),
       title: 'task 2',
       message: 'message 2',
      image: imageUrl 
   },{ 
       id: uuid(),
       title: 'task 3',
       message: 'message 3',
      image: imageUrl
   },{ 
       id: uuid(),
       title: 'task 4',
       message: 'message 4',
      image: imageUrl 
  }])



  const addTask = (title, message, image) => {
    setTasks([
        ...tasks, 
        {
            id: uuid(),
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

  const updateTask = (id, title, message, image = imageUrl) => {
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
      <Container className = {classes.root}>
          <Grid  className = {classes.container} >
            <Grid item  >
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
          </Grid > 
     </Container>
    );
}
