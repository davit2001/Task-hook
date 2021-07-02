import {combineReducers} from 'redux'
import { projectsReducer} from './projects/projectsReducer'
import {projectsUIReducer} from './projects/projectsUIReducer'
import { tasksReducer } from './tasks/tasksReducer'
import {tasksUIReducer} from './tasks/tasksUIReducer'

 export const rootReducer = combineReducers({
      projects: projectsReducer,
      projectsUI: projectsUIReducer,
      tasks: tasksReducer,
      tasksUI: tasksUIReducer
})
