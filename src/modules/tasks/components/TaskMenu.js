import React, {useCallback, useState} from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Menu, MenuItem, IconButton} from "@material-ui/core";

export default function TaskMenu({closeTaskDialog, editTask, addTaskId, id, parentId}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const editItem = useCallback(() => {
        editTask(id);
        setAnchorEl(null);
    }, []);

    const removeItem = (parentId) => {
        closeTaskDialog(id, parentId);
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <>
            <IconButton aria-controls="simple-menu" aria-haspopup="true"
                onClick={handleClick}>
                <MoreVertIcon/>
            </IconButton>

            <Menu id={id}
                anchorEl={anchorEl}
                keepMounted
                open={
                    Boolean(anchorEl)
                }
                onClick={
                    (event) => event.stopPropagation()
                }
                onClose={handleClose}>
                <MenuItem onClick={editItem}>Edit</MenuItem>
                <MenuItem onClick={() => removeItem(parentId)}>Remove</MenuItem>
                <MenuItem onClick={() => addTaskId(id, true)}>Create</MenuItem>
            </Menu>
        </>
    );
}