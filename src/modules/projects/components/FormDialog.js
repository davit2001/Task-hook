import React, {useEffect, useMemo, useState} from "react";
import FileBase from "react-file-base64";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {Typography} from "@material-ui/core";
import Field from '../../../components/Field'

export default function FormDialog({
    projects,
    editId,
    isOpenForm,
    addProject,
    updateProject,
    closeProjectForm
}) {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
    const [isError, setError] = useState(false);
    const task = useMemo(() => projects.find((project) => project.id === editId), [editId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && message) {
            if (editId) {
                let data = {
                    id: editId,
                    title,
                    message,
                    image
                };
                updateProject(data);
            } else {
                addProject({title, message, image});
            }
            setError(false);
            closeProjectForm();
        } else {
            setError(true);
        }

        setTitle("");
        setMessage("");
        setImage("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
    };

    useEffect(() => {
        if (task ?. id) {
            setTitle(task ?. title);
            setMessage(task ?. message);
            setImage(task ?. image);
        }
    }, [task ?. id]);

    return (
        <div>
            <Dialog open={isOpenForm}
                onClose={closeProjectForm}
                aria-labelledby="form-dialog-title">
                    <Typography variant="h4" component="h2" gutterBottom color="textSecondary" align="center">
                        {
                        task ?. id ? "Edit Project" : "Create Project"
                    } </Typography>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <Field 
                           handleChange={
                                (e) => setTitle(e.target.value)
                            }
                            value={title}
                            label="Title"
                            error={isError}
                            helperText={
                                isError && "Fields must be required"
                            }/>
                        <Field 
                           handleChange={
                                (e) => setMessage(e.target.value)
                            }
                            value={message}
                            label="Summary"
                            multiline
                            maxRows={4}
                            error={isError}
                            helperText={
                                isError && "Fields must be required"
                            }/>
                        <div>
                            <FileBase type="file"
                                multiple={false}
                                onDone={
                                    ({base64}) => setImage(base64)
                                }/>
                        </div>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={closeProjectForm}
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
                </form>
            </Dialog>
        </div>
    );
}
