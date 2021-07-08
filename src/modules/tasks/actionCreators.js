import {
    ADD_TASK, 
    UPDATE_TASK, 
    REMOVE_TASK, 
    SEARCH_TASKS
} from "./constants/taskTypes";

export function fetchTaskAdd(task,id) {
    return {type: ADD_TASK, payload: {
        task,
        id
    }};
}

export function fetchTaskUpdate(data, parentId) {
    return {
        type: UPDATE_TASK,
         payload: {
             parentId,
             ...data
         }
    };
}

export function fetchTaskRemove(id, parentId) {
    return {type: REMOVE_TASK, payload: {
            id,
            parentId
        }};
}

export function fetchTaskSearch(name) {
    return {type: SEARCH_TASKS, payload: name};
}

