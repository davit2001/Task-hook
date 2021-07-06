import {ADD_TASK, UPDATE_TASK, REMOVE_TASK, SEARCH_TASKS} from "./constants/taskTypes";

import {taskReducer} from "./reducer.spec";

const initialState = {
    tasks: [],
    searchKeyword: ""
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    return taskReducer(task, action);
                })
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id)
            };
        case SEARCH_TASKS:
            return {
                ...state,
                searchKeyword: action.payload
            };
        default:
            return state;
    }
};

export const tasksSelector = () => (state) => state.tasks.tasks;

export const projectTasksSelector = (projectId) => (state) => state.tasks.tasks.filter((task) => task.projectId === projectId);

export const searchTasksSelector = () => (state) => state.tasks.tasks.filter((task) => task.name.includes(state.tasks.searchKeyword));
