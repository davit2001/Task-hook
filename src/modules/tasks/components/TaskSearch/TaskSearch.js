import React from "react";
import {makeStyles, Typography, Container} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import TaskSearchForm from "./TaskSearchForm/TaskSearchForm";
import TaskSearchItem from "./TaskSearchItem/TaskSearchItem";
import {searchTasksSelector} from "../../reducer";
const useStyles = makeStyles({
    container: {
        overflow: "auto",
        height: "38rem"
    }
});

export default function TaskSearch() {
    const tasks = useSelector(searchTasksSelector());
    const classes = useStyles();
    return (
        <Grid>
            <Grid item>
                <Typography variant="h4" gutterBottom>
                    Search
                </Typography>
                <TaskSearchForm/>
            </Grid>
            <Container className={
                classes.container
            }>
                <Grid item>
                    {
                    tasks.length !== 0 && tasks.map((task) => <TaskSearchItem task={task}/>)
                } </Grid>
            </Container>
        </Grid>
    );
}