import {
    CLOSE_TASK_DIALOG,
    EDIT_TASK_ID,
    TOGGLE_TASK_FORM,
    ACTIVE_CLASS,
    ADD_TASK_ID,
    TOGGLE_TASK_DIALOG
} from "../constants/taskTypes";

export function fetchCloseTaskDialog(id = null, parentId, bool) {
    return {
        type: CLOSE_TASK_DIALOG,
        payload: {
            id,
            parentId,
            isOpenDialog: bool
        }
    };
}

export function fetchEditTaskId(id, parentId) {
    return {
        type: EDIT_TASK_ID,
        payload: {
            id,
            parentId
        }
    };
}

export function fetchToggleTaskForm(bool) {
    return {type: TOGGLE_TASK_FORM, payload: bool};
}

export function fetchActiveClass(id) {
    return {type: ACTIVE_CLASS, payload: {
            id
        }}
}


export function fetchTaskId(id, bool) {
    return {
        type: ADD_TASK_ID,
        payload: {
            id,
            isOpenForm: bool
        }
    }
}

export function fetchToggleTaskDialog(bool, id) {
    console.log('click', bool)
    return {
        type: TOGGLE_TASK_DIALOG,
        payload: {
            bool,
            id
        }
    }
 }
