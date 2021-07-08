import FormDialog from "../components/TaskFormDialog/TaskFormDialog"
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'

import {fetchTaskAdd, fetchTaskUpdate} from '../actionCreators'
import {fetchToggleTaskForm, fetchEditTaskId, fetchTaskId} from '../UI/tasksUI';

const mapStateToProps = (state, ownProps) => {
    return {
        parentId: state.tasksUI.parentId,
        tasks: state.tasks.tasks, 
        editId: state.tasksUI.editId, 
        isOpenForm: state.tasksUI.isOpenForm, 
        projectId: ownProps.projectId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: (data, parentId) => {
            dispatch(fetchTaskUpdate(data, parentId))
            dispatch(fetchEditTaskId(''))
        },
        addTask: (data, id) => {
            dispatch(fetchTaskAdd({
                id: nanoid(),
                parentId: id,
                ...data
            }, id))
        },
        closeTaskForm: (bool) => {
            dispatch(fetchToggleTaskForm(bool))
        },
       
        addTaskId: (id, bool = null) => {
            dispatch(fetchTaskId(id, bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)
