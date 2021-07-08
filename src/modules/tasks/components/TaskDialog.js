import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ProjectDialog({
    parentId,
    removeId,
    isOpenDialog,
    removeTask,
    closeProjectDialog
}) {
    return (<div>
        <Dialog open={isOpenDialog}
            onClose={closeProjectDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title"> {"Are you sure you want to delete Task"} </DialogTitle>

            <DialogActions>
                <Button onClick={closeProjectDialog}
                    color="primary">
                    Cancel
                </Button>
                <Button onClick={
                        () => removeTask(removeId, parentId)
                    }
                    color="primary"
                    autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    </div>);
}
