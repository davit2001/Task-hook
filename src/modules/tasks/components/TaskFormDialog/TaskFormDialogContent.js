import React from 'react'
import { 
    DialogContent, 
    TextField,
    InputLabel,
    FormControl,
    MenuItem,
    Select, 
    makeStyles
} from '@material-ui/core';
import Field from '../../../../components/Field'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}))

export default function TaskFormDialogContent({
    handleSubmit,
    name,
    setName,
    description,
    setDescription,
    assignee,
    setAssignee,
    isError,
    status,
    statusChange
}) {
    const classes = useStyles();
    return (
        <>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Field 
                       handleChange ={
                            (e) => setName(e.target.value)
                        }
                        value={name}
                        label="Name"
                        margin="normal"
                        error={isError}
                        helperText={
                            isError && "Fields must be required"
                        }/>
                    <Field 
                        handleChange={
                            (e) => setDescription(e.target.value)
                        }
                        value={description}
                        label="Description"
                        multiline
                        maxRows={4}
                        error={isError}
                        helperText={
                            isError && "Fields must be required"
                        }/>
                    <Field 
                        handleChange={
                            (e) => setAssignee(e.target.value)
                        }
                        value={assignee}
                        label="Assignee"
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
        </>
    )
}
