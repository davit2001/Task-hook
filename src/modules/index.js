import {combineReducers} from "redux";
import {projectsReducer} from "../modules/projects/reducer";
import {projectsUIReducer} from "../modules/projects/UI/projectsUIReducer";
import {tasksReducer} from "../modules/tasks/reducer";
import {tasksUIReducer} from "../modules/tasks/UI/tasksUIReducer";

export const rootReducer = combineReducers({projects: projectsReducer, projectsUI: projectsUIReducer, tasks: tasksReducer, tasksUI: tasksUIReducer});
