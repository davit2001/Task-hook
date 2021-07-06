import React from "react";
import {useSelector} from "react-redux";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import TaskNavigationItem from "../TaskNavigationItem/TaskNavigationItem";
import {projectTasksSelector} from "../../../reducer";
const useStyles = makeStyles({
    navigationContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
})
export default function TaskNavigationList({projectId}) {
    const classes = useStyles();
    const tasks = useSelector(projectTasksSelector(projectId));
    return (
        <Container>
            <Grid item>
                <Typography variant="h4" gutterBottom>
                    Navigation
                </Typography>
            </Grid>
            <Grid item
                className={
                    classes.navigationContainer
            }>
                {
                tasks.length ? (tasks.map((task) => <TaskNavigationItem key={
                        task.id
                    }
                    task={task}/>)) : (
                    <Typography>Tasks does not exist</Typography>
                )
            } </Grid>
        </Container>
    );
}
