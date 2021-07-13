import {
    ADD_TASK,
    UPDATE_TASK,
    REMOVE_TASK,
    SEARCH_TASKS,
    UPDATE_TASKS
} from "./constants/taskTypes";


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
            let {
                ...data
            } = action.payload;
            let {id: Id, parentId: parentTaskId} = data
            if (parentTaskId) {
                let parentTask = getTask(parentTaskId);
                for (let i = 0; i < parentTask.children.length; i++) {
                    if (parentTask.children[i].id === Id) {
                        parentTask.children[i] = {
                            ...data,
                            parentId: parentTask.children[i].parentId,
                            children: [... parentTask.children[i].children]
                        }
                        break;
                    }
                }
                return state
            }
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id !== Id) 
                        return task

                    

                    return {
                        ...data,
                        children: [...task.children]
                    }
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
        case UPDATE_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        default:
            return state;
    }

};


export const taskSelector = (taskId) => (state) => {
    let queue = [...state.tasks.tasks];
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

export const projectTasksSelector = (projectId) => (state) => state.tasks.tasks.filter((task) => task.projectId === projectId);
export const searchTasksSelector = () => (state) => {
    let queue = [...state.tasks.tasks];
    let tasks = []
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.name.includes(state.tasks.searchKeyword)) 
            tasks.push(current)
        
        for (let child of current.children) {
            queue.push(child)
        }
    }
    return tasks
}
