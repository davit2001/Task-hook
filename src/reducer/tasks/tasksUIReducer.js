import {
    CLOSE_TASK_DIALOG,
    EDIT_TASK_ID,
    TOGGLE_TASK_FORM
} from '../../action/type/taskTypes'

const initialState = {
    isOpenDialog: false,
    isOpenForm: false,
    editId: '',
    removeId: ''
}

export const tasksUIReducer = (state = initialState, action) => {
    switch (action.payload) {
        case TOGGLE_TASK_FORM:
            console.log('reducer', action.payload)
            return {
                ...state,
                isOpenForm: action.payload
            }  

        case CLOSE_TASK_DIALOG: 
        console.log('close')
         return {
            ...state,
            removeId: action.payload?.id,
            isOpenDialog: action.payload.isOpenDialog || false
        }

      case EDIT_TASK_ID:
          return {
              ...state,
              editId: action.payload.id,
              isOpenForm: true
          }
        
        default: 
          return state 
    }
      
}