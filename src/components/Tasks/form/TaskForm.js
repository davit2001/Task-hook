import React, { useEffect } from 'react'
import { Paper, TextField, Button, makeStyles, Typography } from '@material-ui/core'
import FileBase from 'react-file-base64';

import { useStyles } from './styles';
import { useState } from 'react';

export default function TaskList({addTask, updateTask, task}) {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
         e.preventDefault()
         if (task?.id) {
             updateTask(task.id, title, message, image)
         } else {
            addTask(title, message, image)    
         }

        setTitle('')
        setMessage('')
        setImage('')
    }

  useEffect(() => {
         setTitle(task?.title)
         setMessage(task?.message)
         setImage(task?.image)
  }, [task?.id])

    const classes = useStyles()
    return (
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form}>
                <Typography 
                    variant = "h4"
                     component="h2"
                     gutterBottom
                     color = "textSecondary"
                     align = "center"
                 > 
                 {task?.id ? 'Edit Task' : 'Create Task'}
                </Typography>

                <TextField 
                   onChange={(e) => setTitle(e.target.value)}
                    value = {title}
                    label = "Title" 
                    variant="outlined"
                    color = "primary"
                    fullWidth
                    margin="normal"
                 />

                <TextField 
                  onChange={(e) => setMessage(e.target.value)}
                  value = {message}
                   label = "Summary" 
                   variant="outlined" 
                   fullWidth 
                   margin="normal"  
                />

               <div className={classes.fileInput}>
                   <FileBase type="file" multiple={false} onDone = {({base64}) => setImage(base64)} />
                </div>

               <Button 
                  onClick={handleSubmit}
                  variant = "contained"
                  fullWidth
                  color = "primary"
                 className = {classes.btn}
                > {task?.id ? 'Update' :  'Add'}</Button>

            </form>
        </Paper>
    )
}