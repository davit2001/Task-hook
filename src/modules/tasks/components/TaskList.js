import React, {useCallback} from "react";
import TaskItem from "./TaskItem/TaskItem";
import {Container, Typography, makeStyles, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import {projectTasksSelector} from "../reducer";
import update from 'immutability-helper';
import { useDispatch } from "react-redux";
import { fetchTasksUpdate } from "../actionCreators";
import TaskItemDialog from "./TaskItemDialog";

const useStyles = makeStyles({
    container: {
        overflowY: "auto",
        height: "40rem"
    },
    item: {
        wordWrap: "break-word"
    }
});

export default function TaskList({projectId}) {
    const classes = useStyles();
    const tasks = useSelector(projectTasksSelector(projectId));
   const dispatch = useDispatch()

const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = tasks[dragIndex];
         dispatch(fetchTasksUpdate(
            update(tasks, {
                $splice: [
                    [
                        dragIndex, 1
                    ],
                    [
                        hoverIndex, 0, dragCard
                    ],
                ]
            })
        ))
    }, [tasks]);

    return (
        <Container className={
                classes.container
            }
            id="container">
            {
            tasks.length ? (
                <> {
                    tasks && tasks.map((task, index) => (
                        <Grid item

                            id={
                                task.id
                            }
                            key={
                                task.id
                            }
                            className={
                                classes.item
                        }>
                            <TaskItem task ={task}
                                index={index}
                                moveCard={moveCard}/>
                        </Grid>
                    ))
                } </>
            ) : (
                <Typography>Task does not exist</Typography>
            )
            
        } 
        <TaskItemDialog tasks = {tasks}/>
        </Container>
    );
}
