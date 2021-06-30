import { nanoid } from 'nanoid';
import {
    ADD_PROJECT,
    REMOVE_PROJECT,
    UPDATE_PROJECT
} from '../../actionTypes/projectTypes'

import { projectReducer } from './projectReducer';

const imageUrl = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'

const initialState = [
    { id: nanoid(),
      title: 'project 1',
      message: 'message 1',
      image: imageUrl 
   },{ 
       id: nanoid(),
       title: 'project 2',
       message: 'message 2',
      image: imageUrl 
   },{ 
       id: nanoid(),
       title: 'project 3',
       message: 'message 3',
      image: imageUrl
   },{ 
       id: nanoid(),
       title: 'project 4',
       message: 'message 4',
      image: imageUrl 
  }
]



export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT: 
            return [
                ...state,
                action.payload
            ]

        case REMOVE_PROJECT:
           return state.filter( project => projectReducer(project, action))

        case UPDATE_PROJECT:
           return  state.map( project => {
                       return projectReducer(project, action)
                })   
         default: 
            return state
    }
}

export const projectSelector = () => (state) => state.projects
export const tasksProjectSelector = (projectId) => (state) => state.projects.find(project => project.id === projectId)