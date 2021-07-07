import {StaticRouter} from "react-router-dom";
import {
    CLOSE_TASK_DIALOG, 
    EDIT_TASK_ID, 
    TOGGLE_TASK_FORM, 
    ACTIVE_CLASS,
    ADD_TASK_ID
} from "../constants/taskTypes";

const initialState = {
    isOpenDialog: false,
    isOpenForm: false,
    editId: "",
    removeId: "",
    taskId: "",
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
                isOpenDialog: action.payload.isOpenDialog || false
            };

        case EDIT_TASK_ID:
            return {
                ...state,
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
                    taskId:  action.payload.id,
                    isOpenForm: action.payload.isOpenForm
                }
            }

            return {
                ...state, 
                taskId: action.payload.id,
            }    
        default:
            return state;
    }
};
