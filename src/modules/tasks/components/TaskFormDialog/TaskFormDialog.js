import React, {useEffect, useMemo, useState} from "react";
import {Typography, Dialog} from "@material-ui/core";
import {useStyles} from "../styles";
import TaskFormDialogAction from './TaskFormDialogAction'
import {useSelector} from "react-redux";
import {taskSelector} from '../../reducer'
import TaskFormDialogContent from "./TaskFormDialogContent";
export default function TaskFormDialog({
    projectId,
    tasks,
    editId,
    isOpenForm,
    addTask,
    updateTask,
    closeTaskForm,
    addTaskId,
    parentId
}) {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [status, setStatus] = useState("in progress");
    const [isError, setError] = useState(false);

    const getTask = useSelector(taskSelector(editId))
    const task = useMemo(() => tasks.find((task) => task.id === editId), [editId]) || getTask

    const statusChange = (e) => {
        setStatus(e.target.value);
    };
    const taskId = useSelector(state => state.tasksUI.taskId)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description && assignee) {
            if (editId) {
                let data = {
                    id: editId,
                    parentId,
                    projectId,
                    name,
                    description,
                    assignee,
                    status,
                    children: []
                };
                updateTask(data, parentId);
            } else {

                addTask({
                    projectId,
                    name,
                    description,
                    assignee,
                    status,
                    children: []
                }, taskId);

            }
            setError(false);
            closeTaskForm(false);

        } else {
            setError(true);
        }
        setName("");
        setDescription("");
        setAssignee("")
        addTaskId('')
    };

    useEffect(() => {
        if (task ?. id) {
            setName(task ?. name);
            setDescription(task ?. description);
            setAssignee(task ?. assignee);
            setStatus(task ?. status);
        }
    }, [task ?. id]);

    return (
        <div>
            <Dialog open={isOpenForm}
                onClose={
                    () => closeTaskForm(false)
                }
                aria-labelledby="form-dialog-title">
                <Typography variant="h4" component="h2" gutterBottom color="textSecondary" align="center">
                    {
                    task ?. id ? "Edit Task" : "Create Task"
                } </Typography>
                <TaskFormDialogContent handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    assignee={assignee}
                    setAssignee={setAssignee}
                    isError={isError}
                    status={status}
                    statusChange={statusChange}/>

                <TaskFormDialogAction task={task}
                    handleSubmit={handleSubmit}
                    closeTaskForm={closeTaskForm}/>
            </Dialog>
        </div>
    );
}
