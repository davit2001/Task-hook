import {TOGGLE_PROJECT_DIALOG, EDIT_PROJECT_ID, TOGGLE_PROJECT_FORM} from "../constants/projectTypes";

const initialState = {
    editId: "",
    removeId: "",
    isOpenDialog: false,
    isOpenForm: false
};

export const projectsUIReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PROJECT_DIALOG:
            return {
                ...state,
                removeId: action.payload ?. id,
                isOpenDialog: action.payload.isOpenDialog || false
            };

        case EDIT_PROJECT_ID:
            return {
                ...state,
                editId: action.payload.id,
                isOpenForm: true
            };
        case TOGGLE_PROJECT_FORM:
            return {
                ...state,
                isOpenForm: action.payload
            };

        default:
            return state;
    }
};
