const initialState = {
   tasks: [],
   searchTasks: []
}

export const taskReducer = (state = initialState, action ) => {
   switch(action.type) {
         case 'ADD_TASK': 
           return {
              ...state,
              tasks: [...state.tasks, action.payload]
           }
         case 'UPDATE_TASK':
            let {id, name, assignee ,description, status} = action.payload;
             return {
               ...state,
               tasks: state.tasks.map(task => {
                   if (task.id == id) {
                      let updatedTask = {...task};
                       updatedTask.name = name;
                       updatedTask.assignee = assignee;
                       updatedTask.description = description;
                       updatedTask.status = status;
                       return updatedTask
                   }
                   return task
               })
            }   
         case "REMOVE_TASK":
            return {
               ...state,
               tasks: state.tasks.filter( task => task.id !== action.payload.id)
            }
         case 'SEARCH_TASKS':
           return {
              ...state,
              searchTasks: state.tasks.filter(task => task.name.includes(action.payload))
           }           
           default: 
           return state
   }
}

export const tasksSelector =  () => (state) => state.tasks.tasks
export const projectTasksSelector = (projectId) => (state) => state.tasks.tasks.filter(task => task.projectId === projectId)
export const searchTasksSelector =  () => (state) =>state.tasks.searchTasks