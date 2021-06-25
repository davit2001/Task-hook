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
            return  state.filter(project => {
                    if (project.id === id)  { 
                        project.title = title
                        project.message = message  
                        project.image = image
                      } 
                      return  project; 
                 })   
                 
         default: 
            return state
    }
}