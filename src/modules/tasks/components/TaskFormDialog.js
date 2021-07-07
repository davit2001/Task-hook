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
    DialogActions,
    DialogContent
} from "@material-ui/core";

import {useStyles} from "./styles";
import { useSelector } from "react-redux";

export default function FormDialog({
    projectId,
    tasks,
    editId,
    isOpenForm,
    addTask,
    updateTask,
    closeTaskForm,
    addTaskChild,
    addTaskId
}) {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [status, setStatus] = useState("in progress");
    const [isError, setError] = useState(false);
    const task = useMemo(() => tasks.find((task) => task.id == editId), [editId]);

    const statusChange = (e) => {
        setStatus(e.target.value);
    };
    const taskId = useSelector(state => state.tasksUI.taskId)

//   const   getNodeWithValue = (taskId) =>  {
//     let queue = [...tasks];
//      while (queue.length > 0) {
//         const current = queue.shift();
//         if (current.id === taskId) return current;
//         for (let child of current.children) {
//             queue.push(child)
//         }
//     }
//     return null
// }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description && assignee) {
            if (editId) {
                let data = {
                    id: editId,
                    projectId,
                    name,
                    description,
                    assignee,
                    status
                };
                updateTask(data);
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
                onClose={closeTaskForm}
                aria-labelledby="form-dialog-title">
                    <Typography variant="h4" component="h2" gutterBottom color="textSecondary" align="center">
                        {
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
                        <TextField 
                           required
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

                <DialogActions>
                    <Button onClick={closeTaskForm}
                        color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}
                        color="primary"
                        type="submit">
                        {
                        task ?. id ? "Update" : "Add"
                    } </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
