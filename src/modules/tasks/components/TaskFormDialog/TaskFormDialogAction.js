import React from 'react'
import {Button , DialogActions} from '@material-ui/core'
export default function TaskFormDialogAction({task, handleSubmit, closeTaskForm}) {
    return (
        <>
            <DialogActions>
                <Button onClick={
                        () => closeTaskForm(false)
                    }
                    color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit}
                    color="primary"
                    type="submit"> {
                    task ?. id ? "Update" : "Add"
                } </Button>
            </DialogActions>
        </>
    )
}
