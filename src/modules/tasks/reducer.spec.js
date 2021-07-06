import {UPDATE_TASK} from "./constants/taskTypes";

export const taskReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TASK:
            let {
                id,
                ...newTaskData
            } = action.payload;
            if (state.id !== id) 
                return state;
                
            return {
                ...state,
                ...newTaskData
            }

        default:
            return state;
    }
};
