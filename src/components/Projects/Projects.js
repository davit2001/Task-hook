import React from 'react'
import {
  Container,
  Grid,
  IconButton,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import ProjectList from './ProjectList/ProjectList'
import FormDialog from './hoc/Dialog/FormDialog';
import ProjectDialog from './hoc/Dialog/ProjectDialog';
import { useStyles } from './styles';

import {useDispatch} from 'react-redux'
import { fetchToggleProjectForm} from '../../action/projectsUI';

export const ProjectContext = React.createContext('')

export default function Projects() {
    const classes = useStyles();
    const dispatch = useDispatch()
 
  return (
    <Container className = {classes.root}>
        <Grid  className = {classes.container} >
             <Grid item >
                  <IconButton className = {classes.iconButton} onClick = {() => dispatch(fetchToggleProjectForm(true))} >
                        <AddIcon />
                   </IconButton>
                        <ProjectList />
              </Grid>
        </Grid > 
         <ProjectDialog />
         <FormDialog />
    </Container>
    );
}