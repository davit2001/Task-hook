import FormDialog from "../../Dialog/TaskFormDialog"
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'

import { fetchTaskAdd, fetchTaskUpdate } from '../../../../action/tasks';
import { fetchToggleTaskForm, fetchEditTaskId } from '../../../../action/tasksUI'; 

const mapStateToProps = (state, ownProps) => {
    return {
      tasks:  state.tasks.tasks,
      editId: state.tasksUI.editId,
      isOpenForm:  state.tasksUI.isOpenForm,
      projectId: ownProps.projectId,
     }
 }
 
 const mapDispatchToProps = (dispatch) => {
   return {
       updateTask: (data) => {
          dispatch(fetchTaskUpdate(data))
          dispatch(fetchEditTaskId(''))
      },
      addTask: ({ 
        projectId,
        name,
        description,
        assignee,
        status
    }) => dispatch(fetchTaskAdd({
           id: nanoid(),
           projectId,
           name,
           description,
           assignee,
           status
       })),
        closeTaskForm: () => {
         dispatch(fetchToggleTaskForm(false))
       }
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)