import {TOGGLE_PROJECT_DIALOG, EDIT_PROJECT_ID, TOGGLE_PROJECT_FORM} from "../constants/projectTypes";

export function fetchToggleProjectDialog(id = null, bool) {
    return {
        type: TOGGLE_PROJECT_DIALOG,
        payload: {
            id,
            isOpenDialog: bool
        }
    };
}

export function fetchEditProjectId(id) {
    return {type: EDIT_PROJECT_ID, payload: {
            id
        }};
}

export function fetchToggleProjectForm(bool) {
    return {type: TOGGLE_PROJECT_FORM, payload: bool};
}
