import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function TaskDialog({isOpenDialog, setOpenDialog, removeTask}) {

 const handleClose = useCallback(() => {
  setOpenDialog(false);
  }, []);

  return (
    <div>
     <Dialog
        open={isOpenDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete Project"}
          </DialogTitle>
       
        <DialogActions>
          <Button onClick ={handleClose} color = "primary">
            Cancel
          </Button>
          <Button onClick ={removeTask} color = "primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}