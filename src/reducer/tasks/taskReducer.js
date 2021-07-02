
import {
   UPDATE_TASK,
   REMOVE_TASK,
   SEARCH_TASKS
} from '../../action/type/taskTypes'

export const taskReducer = (state, action) => {
   switch(action.type) {
       case UPDATE_TASK: 
       let {id, name, assignee ,description, status} = action.payload;
          if (state.id === id) {
            let updatedTask = {...state};
             updatedTask.name = name;
             updatedTask.assignee = assignee;
             updatedTask.description = description;
             updatedTask.status = status;
             
             return updatedTask
         }

      case REMOVE_TASK:
         return state.id !== action.payload.id

      case SEARCH_TASKS:
         return state.name.includes(action.payload)

       default:
          return state
   }
}