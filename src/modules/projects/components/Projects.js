import React from "react";
import {Container, Grid, Fab} from "@material-ui/core";

import ProjectList from "./ProjectList";
import FormDialog from "../container/FormDialog";
import ProjectDialog from "../container/ProjectDialog";
import {useStyles} from "./styles";
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from "react-redux";
import { fetchToggleProjectForm } from "../UI/projectsUI";

export default function Projects() {
    const classes = useStyles();
     const dispatch = useDispatch()

    return (
        <Container className={
            classes.root
        }>
            <Grid className={
                classes.container
            }>
                <Grid item>
                    <ProjectList/>
                </Grid>
            </Grid>
            <ProjectDialog/>
            <FormDialog/>
            <Fab onClick= {() => dispatch(fetchToggleProjectForm(true))}
                className={
                    classes.IconButton
                }
                size="medium"
                color="primary"
                aria-label="add">
                <AddIcon/>
            </Fab>
        </Container>
    );
}
