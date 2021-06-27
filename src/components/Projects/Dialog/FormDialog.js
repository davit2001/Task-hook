import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Typography} from '@material-ui/core'

import FileBase from 'react-file-base64'
import { nanoid } from 'nanoid'
import { fetchProjectAdd } from '../../../action/projects';
import { useDispatch} from 'react-redux';

export default function FormDialog({isOpenForm, setOpenForm, editId, task, updateTask}) {

  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [image, setImage] = useState('https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png')
  const [isError, setError] = useState(false)
 
const dispatch = useDispatch()

const handleClose = () => {
  setOpenForm(false)
  };

  const addTask = () => {
    let newTask = {
      id: nanoid(),
      title, 
      message, 
      image
  }
    dispatch(fetchProjectAdd(newTask))
}

  const handleSubmit = (e) => {
    e.preventDefault()
   if (title && message) {
       if (editId) {
           let data = {
             id: editId,
             title,
             message,
             image
           }
          updateTask(data)
       } else {
          addTask()    
       }
       setError(false)
       setOpenForm(false)
   } else {
       setError(true)
   }
    
   setTitle('')
   setMessage('')
   setImage('https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png')
}


useEffect(() => {
  if (task?.id) {
    setTitle(task?.title)
    setMessage(task?.message)
    setImage(task?.image)  
  }
}, [task?.id])

  return (
    <div>
      
      <Dialog open={isOpenForm} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
                 <Typography 
                     variant = "h4"
                     component="h2"
                     gutterBottom
                     color = "textSecondary"
                     align = "center"
                  > 
                  {task?.id ? 'Edit Project' : 'Create Project'}
                
                </Typography>
        </DialogTitle>
        <form  onSubmit = {handleSubmit}>
        <DialogContent>
        
              <TextField 
                  onChange={(e) => setTitle(e.target.value)}
                  value = {title}
                  label = "Title" 
                  variant="outlined"
                  color = "primary"
                  fullWidth
                  margin="normal"
                  error = {isError}
                  helperText = {isError && 'Fields must be required'}
               />
                <TextField 
                     onChange={(e) => setMessage(e.target.value)}
                     value = {message}
                     label = "Summary" 
                     variant="outlined" 
                     fullWidth 
                     multiline
                     rowsMax = {4}
                     margin="normal"  
                     error = {isError}
                     helperText = {isError && 'Fields must be required'}
                 />
             <div>
                   <FileBase type="file" multiple={false} onDone = {({base64}) => setImage(base64)} />
             </div>
         
             
        </DialogContent>

        <DialogActions>
           <Button onClick = {handleClose} color = "primary">
              Cancel
            </Button>
            <Button onClick = {handleSubmit} color = "primary" type = "submit">
              {task?.id ? 'Update' :  'Add'}
            </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}