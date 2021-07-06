import {UPDATE_PROJECT} from "./constants/projectTypes";

export const projectReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PROJECT:
            let {
                id,
                ...newProjectData
            } = action.payload;
            if (state.id !== id) 
                return state;
            return {
                ...state,
                ...newProjectData
            }
        default:
            return state;
    }
};
