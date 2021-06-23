import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Typography} from '@material-ui/core'
import FileBase from 'react-file-base64'

export default function FormDialog({isOpenForm, setOpenForm, task, addTask, updateTask}) {

  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [image, setImage] = useState('https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png')
 const [isError, setError] = useState(false)

const handleClose = () => {
  setOpenForm(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
   if (title && message) {
       if (task?.id) {
         console.log('updateTask')
           updateTask(task.id, title, message, image)
       } else {
         console.log('addTask')
          addTask(title, message, image)    
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
        <DialogContent>
          <form  onSubmit = {handleSubmit}>
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
          </form>
             
        </DialogContent>

        <DialogActions>
           <Button onClick = {handleClose} color = "primary">
              Cancel
            </Button>
            <Button onClick = {handleSubmit} color = "primary" type = "submit">
              {task?.id ? 'Update' :  'Add'}
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}