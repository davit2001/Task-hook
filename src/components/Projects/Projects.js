import React, { useCallback, useMemo, useState } from 'react'
import {
  Container,
  Grid,
  IconButton,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import ProjectList from './ProjectList/ProjectList'
import FormDialog from './Dialog/FormDialog';
import ProjectDialog from './Dialog/ProjectDialog';
import { useStyles } from './styles';
import { nanoid } from 'nanoid'

import {useDispatch, useSelector} from 'react-redux'
import { fetchProjectAdd, fetchProjectRemove, fetchProjectUpdate } from '../../action/projects';
 

export const ProjectContext = React.createContext('')

export default function Projects() {
    const classes = useStyles();

    const [editId, setEditId] = useState(null)
    const [removeId, setRemoveId] = useState(null)
    const [isOpenDialog, setOpenDialog] = useState(false)
    const [isOpenForm, setOpenForm] = useState(false)

    const projects = useSelector((state) => state.projects)
    const dispatch = useDispatch()
 
const idd = useMemo(()=>{
  return nanoid();
},[])

    const addProject = useCallback(({title, message, image}) => {
      let newTask = {
        id: idd,
        title, 
        message, 
        image
    }
      dispatch(fetchProjectAdd(newTask))
}, [])

  const removeProjectDialog = useCallback((id) => {
      setRemoveId(id)
      setOpenDialog(true)
  }, [])

  const removeProject = useCallback(() => {
    setOpenDialog(false)
    dispatch(fetchProjectRemove(removeId))
    setRemoveId(null)
  }, [removeId])

  const updateTask = useCallback((data) => {
     dispatch(fetchProjectUpdate(data))
     setEditId('')
  }, [projects])

  const editProject = useCallback((id) => {
      setEditId(id)
      setOpenForm(true)
 }, [])

 let task = useMemo(() => projects.find(project => project.id == editId), [editId])

  return (
    <Container className = {classes.root}>
        <Grid  className = {classes.container} >
             <Grid item >
                  <IconButton className = {classes.iconButton} onClick = {() => setOpenForm(true)} >
                        <AddIcon />
                   </IconButton>
                 <ProjectContext.Provider value = {{
                      removeProjectDialog,
                      editProject
                   }}>
                        <ProjectList />
                   </ProjectContext.Provider>
             </Grid>
        </Grid > 

          <ProjectDialog 
              isOpenDialog = {isOpenDialog}
              setOpenDialog = {setOpenDialog}
              removeProject = {removeProject}
          />

            <FormDialog 
             isOpenForm = {isOpenForm} 
             setOpenForm = {setOpenForm}
             editId = {editId}
             updateTask = {updateTask}
             task = {task}
            />
     </Container>
    );
}
