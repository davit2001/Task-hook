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

import {useDispatch, useSelector} from 'react-redux'
import { fetchProjectRemove, fetchProjectUpdate } from '../../action/projects';
import { projectSelector } from '../../reducer/projectReducer'; 

export const ProjectContext = React.createContext('')

export default function Projects() {
    const classes = useStyles();

    const [editId, setEditId] = useState(null)
    const [removeId, setRemoveId] = useState(null)
    const [isOpenDialog, setOpenDialog] = useState(false)
    const [isOpenForm, setOpenForm] = useState(false)

    const projects = useSelector(projectSelector())
    const dispatch = useDispatch()
 
   const closeProjectDialog = useCallback((id) => {
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
                      closeProjectDialog,
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