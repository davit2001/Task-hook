import {combineReducers} from 'redux'
import {projectReducer} from './projectReducer'
import { taskReducer } from './taskReducer'

 export const rootReducer = combineReducers({
      projects: projectReducer,
      tasks: taskReducer
})
