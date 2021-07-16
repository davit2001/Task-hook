import React, {useCallback} from "react";
import {Container, Typography, makeStyles, Grid} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import {fetchTasksUpdate, fetchTaskAdd} from "../actionCreators";
import {useDrop} from "react-dnd";
import {nanoid} from "nanoid";
import update from "immutability-helper";
import {projectTasksSelector} from "../reducer";
import TaskItem from "./TaskItem/TaskItem";
import TaskItemDialog from "./TaskItemDialog";

const useStyles = makeStyles({
    container: {
        overflowY: "auto",
        height: "40rem",
        backgroundColor: (isOver) => isOver && "#E0E0E0"
    },
    item: {
        wordWrap: "break-word"
    }
});

export default function TaskList({projectId}) {
    const tasks = useSelector(projectTasksSelector(projectId));
    const dispatch = useDispatch();
    const taskId = useSelector((state) => state.tasksUI.taskId);

    const [
        {
            isOver
        }, drop
    ] = useDrop({
        accept: "ITEM",
        drop: (item, monitor) => {
            if (!monitor.didDrop()) {
                dispatch(fetchTaskAdd({
                    ...item.task,
                    id: nanoid(),
                    projectId
                }, taskId));
            }
        },
        collect: (monitor) => (
            {
                isOver: !!monitor.isOver()
            }
        )
    });

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = tasks[dragIndex];
        dispatch(fetchTasksUpdate(update(tasks, {
            $splice: [
                [
                    dragIndex, 1
                ],
                [
                    hoverIndex, 0, dragCard
                ],
            ]
        })));
    },);

    const classes = useStyles(isOver);
    return (
        <Container className={
                classes.container
            }
            ref={drop}
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
                            <TaskItem task={task}
                                index={index}
                                moveCard={moveCard}/>
                        </Grid>
                    ))
                } </>
            ) : (
                <Typography>Task does not exist</Typography>
            )
        }
            <TaskItemDialog tasks={tasks}/>
        </Container>
    );
}
