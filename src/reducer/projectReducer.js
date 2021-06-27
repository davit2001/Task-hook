import { nanoid } from 'nanoid';
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

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT': 
            return [
                ...state,
                action.payload
            ]

        case "REMOVE_PROJECT":
           return state.filter( task => task.id !== action.payload.id)

        case "UPDATE_PROJECT":
            let {id, title, message, image} = action.payload
            return  state.map(project => {
                if (project.id === id) {
                    let updatedProject = {...project};
                     updatedProject.title = title;
                     updatedProject.message = message;
                     updatedProject.image = image;
                     return updatedProject
                  }
                 })   
                 
         default: 
            return state
    }
}

export const projectSelector = () => (state) => state.projects
export const tasksProjectSelector = (projectId) => (state) => state.projects.find(project => project.id === projectId)