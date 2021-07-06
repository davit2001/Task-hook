import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ProjectDialog({removeId, isOpenDialog, removeProject, closeProjectDialog}) {
    return (
        <>
            <Dialog open={isOpenDialog}
                onClose={closeProjectDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete Project"} </DialogTitle>

                <DialogActions>
                    <Button onClick={closeProjectDialog}
                        color="primary">
                        Cancel
                    </Button>
                    <Button onClick={
                            () => removeProject(removeId)
                        }
                        color="primary"
                        autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
