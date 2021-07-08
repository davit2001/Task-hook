import React from "react";
import TaskItem from "./TaskItem/TaskItem";
import Masonry from "react-masonry-css";
import {Container, Typography, makeStyles, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import {projectTasksSelector} from "../reducer";

const useStyles = makeStyles({
    container: {
        overflowY: "auto",
        height: "40rem"
    },
    item: {
        maxWidth: 300,
        wordWrap: "break-word"
    }
});

export default function ProjectList({projectId}) {
    const classes = useStyles();
    const tasks = useSelector(projectTasksSelector(projectId));

    const breakpoints = {
        default: 6,
        1930: 4,
        1500: 3,
        1440: 2,
        1165: 1
    };

    return (<Container className={
            classes.container
        }
        id="container"> {
        tasks.length ? (<Masonry breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"> {
            tasks && tasks.map((task) => (<Grid item
                id={
                    task.id
                }
                key={
                    task.id
                }
                className={
                    classes.item
            }>
                <TaskItem task ={task}/>
            </Grid>))
        } </Masonry>) : (<Typography>Task does not exist</Typography>)
    } </Container>);
}
