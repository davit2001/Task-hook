import React, {useEffect, useState} from 'react';
import {
  Button,
  TextField,
  Typography,
  InputLabel,
  MenuItem, 
  FormControl,
  Select,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle 
} from '@material-ui/core'

import { nanoid } from 'nanoid'
import { fetchTaskAdd } from '../../../action/tasks';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';

export default function FormDialog({isOpenForm, setOpenForm, editId, task, updateTask, projectId}) {
  const classes = useStyles();

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [assignee, setAssignee] = useState('')
  const [status, setStatus] = useState('in progress')
  const [isError, setError] = useState(false)

  const dispatch = useDispatch()

const handleClose = () => {
  setOpenForm(false)
  };
const statusChange = (e) => {
  setStatus(e.target.value)
}
  const addTask = () => {
    let newTask = {
      id: nanoid(),
      projectId,
      name,
      description,
      assignee,
      status
  }
    dispatch(fetchTaskAdd(newTask))
}

  const handleSubmit = (e) => {
    e.preventDefault()
   if (name && description && assignee) {
       if (editId) {
           let data = {
             id: editId,
             projectId,
             name,
             description,
             assignee,
             status
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
   setName('')
   setDescription('')
}


useEffect(() => {
  if (task?.id) {
    setName(task?.name)
    setDescription(task?.description)
    setAssignee(task?.assignee)
    setStatus(task?.status)
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
                  onChange={(e) => setName(e.target.value)}
                  value = {name}
                  label = "Name" 
                  variant="outlined"
                  color = "primary"
                  fullWidth
                  margin="normal"
                  error = {isError}
                  helperText = {isError && 'Fields must be required'}
               />
                <TextField 
                     onChange={(e) => setDescription(e.target.value)}
                     value = {description}
                     label = "Description" 
                     variant="outlined" 
                     fullWidth 
                     multiline
                     rowsMax = {4}
                     margin="normal"  
                     error = {isError}
                     helperText = {isError && 'Fields must be required'}
                 />
                  <TextField 
                     onChange={(e) => setAssignee(e.target.value)}
                     value = {assignee}
                     label = "Assignee" 
                     variant="outlined" 
                     fullWidth
                     margin="normal"  
                     error = {isError}
                     helperText = {isError && 'Fields must be required'}
                 />
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                   <Select
                      value={status}
                      onChange={statusChange}
                   >
                       <MenuItem value = "to do">To do</MenuItem>
                       <MenuItem value = "in progress">In progress</MenuItem>
                       <MenuItem value = "done">Done</MenuItem>
                  </Select>
            </FormControl>
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