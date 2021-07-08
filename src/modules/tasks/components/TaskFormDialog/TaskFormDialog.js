import React, {useEffect, useMemo, useState} from "react";
import {
    Button,
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Dialog,
    DialogContent
} from "@material-ui/core";

import {useStyles} from "../styles";
import TaskFormDialogAction from './TaskFormDialogAction'
import {useSelector} from "react-redux";
import {taskSelector} from '../../reducer'
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
    const task = useMemo(() => tasks.find((task) => task.id == editId), [editId]) || getTask

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

    return (<div>
        <Dialog open={isOpenForm}
            onClose={
                () => closeTaskForm(false)
            }
            aria-labelledby="form-dialog-title">
            <Typography variant="h4" component="h2" gutterBottom color="textSecondary" align="center"> {
                task ?. id ? "Edit Task" : "Create Task"
            } </Typography>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={
                            (e) => setName(e.target.value)
                        }
                        value={name}
                        label="Name"
                        required
                        variant="outlined"
                        color="primary"
                        fullWidth
                        margin="normal"
                        error={isError}
                        helperText={
                            isError && "Fields must be required"
                        }/>
                    <TextField onChange={
                            (e) => setDescription(e.target.value)
                        }
                        value={description}
                        label="Description"
                        required
                        variant="outlined"
                        fullWidth
                        multiline
                        rowsMax={4}
                        margin="normal"
                        error={isError}
                        helperText={
                            isError && "Fields must be required"
                        }/>
                    <TextField required
                        onChange={
                            (e) => setAssignee(e.target.value)
                        }
                        value={assignee}
                        label="Assignee"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={isError}
                        helperText={
                            isError && "Fields must be required"
                        }/>
                    <FormControl className={
                        classes.formControl
                    }>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select value={status}
                            onChange={statusChange}>
                            <MenuItem value="to do">To do</MenuItem>
                            <MenuItem value="in progress">In progress</MenuItem>
                            <MenuItem value="done">Done</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </DialogContent>

              <TaskFormDialogAction 
                  task = {task}
                  handleSubmit = {handleSubmit}
                  closeTaskForm = {closeTaskForm}
              />
        </Dialog>
    </div>);
}
