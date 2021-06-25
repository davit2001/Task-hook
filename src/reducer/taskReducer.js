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
                       task.name = name;
                       task.assignee = assignee;
                       task.description = description;
                       task.status = status
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
