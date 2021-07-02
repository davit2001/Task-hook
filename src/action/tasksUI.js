
import {
    CLOSE_TASK_DIALOG,
    EDIT_TASK_ID,
    TOGGLE_TASK_FORM
} from './type/taskTypes'

export function fetchCloseTaskDialog(id = null, bool) {
    return {
        type: CLOSE_TASK_DIALOG,
        payload: {
            id,
            isOpenDialog:  bool
        }
    }
}

export function fetchEditTaskId(id) {
    return {
        type: EDIT_TASK_ID,
        payload: {
            id
        }
    }
}

export function fetchToggleTaskForm(bool) {
    console.log('action', bool)
    return {
        type: TOGGLE_TASK_FORM,
        payload: bool
    }
 }