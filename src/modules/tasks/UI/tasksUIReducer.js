import {
    CLOSE_TASK_DIALOG,
    EDIT_TASK_ID,
    TOGGLE_TASK_FORM,
    ACTIVE_CLASS,
    ADD_TASK_ID,
    TOGGLE_TASK_DIALOG
} from "../constants/taskTypes";

const initialState = {
    isOpenDialog: false,
    isOpenForm: false,
    isOpenTaskDialog: false,
    editId: "",
    removeId: "",
    taskId: "",
    parentId: "",
    activeClass: ""
};

export const tasksUIReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TASK_FORM:
            return {
                ...state,
                isOpenForm: action.payload
            };

        case CLOSE_TASK_DIALOG:
            return {
                ...state,
                removeId: action.payload ?. id,
                parentId: action.payload ?. parentId,
                isOpenDialog: action.payload.isOpenDialog || false
            };

        case EDIT_TASK_ID:
            return {
                ...state,
                parentId: action.payload.parentId,
                editId: action.payload.id,
                isOpenForm: true
            };
        case ACTIVE_CLASS:
            return {
                ...state,
                activeClass: action.payload.id
            }
        case ADD_TASK_ID:
            if (action.payload.isOpenForm) {
                return {
                    ...state,
                    taskId: action.payload.id,
                    isOpenForm: action.payload.isOpenForm
                }
            }

            return {
                ...state,
                taskId: action.payload.id
            }
        case TOGGLE_TASK_DIALOG:
            console.log('sdfsd', action.payload)
            let {bool, id} = action.payload
            if (id) {
                return {
                    ...state,
                    isOpenTaskDialog: bool,
                    taskId: id
                }
            }
            return {
                ...state,
                isOpenTaskDialog: bool,
                taskId: ''
            }
        default:
            return state;
    }
};
