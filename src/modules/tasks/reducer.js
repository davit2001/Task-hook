import {ADD_TASK, UPDATE_TASK, REMOVE_TASK, SEARCH_TASKS} from "./constants/taskTypes";

import {taskReducer} from "./reducer.spec";

const initialState = {
    tasks: [],
    searchKeyword: ""
};

export const tasksReducer = (state = initialState, action) => {
    const getTask = (taskId) => {
        let queue = [...state.tasks];
        while (queue.length > 0) {
            const current = queue.shift();
            if (current.id === taskId) 
                return current;
            

            for (let child of current.children) {
                queue.push(child)
            }
        }
        return null
    }

    switch (action.type) {
        case ADD_TASK:


            if (action.payload.id) {
                let parentTask = getTask((action.payload.id))
                if (parentTask) {
                    parentTask.children.push(action.payload.task)
                }
                return state
            }
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload.task
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
            let {id, parentId} = action.payload;
            if (parentId) {
                let parentTask = getTask(parentId)
                for (let i = 0; i < parentTask.children.length; i++) {
                    if (parentTask.children[i].id === id) {
                        parentTask.children.splice(i, 1)
                        break;
                    }
                }
                return state
            }
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
