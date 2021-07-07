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

export function fetchTaskUpdate(data) {
    return {type: UPDATE_TASK, payload: data};
}

export function fetchTaskRemove(id) {
    return {type: REMOVE_TASK, payload: {
            id
        }};
}

export function fetchTaskSearch(name) {
    return {type: SEARCH_TASKS, payload: name};
}

