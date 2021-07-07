import FormDialog from "../components/TaskFormDialog"
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'

import {fetchTaskAdd, fetchTaskUpdate} from '../actionCreators'
import {fetchToggleTaskForm, fetchEditTaskId, fetchTaskId} from '../UI/tasksUI';

const mapStateToProps = (state, ownProps) => {
    return {tasks: state.tasks.tasks, editId: state.tasksUI.editId, isOpenForm: state.tasksUI.isOpenForm, projectId: ownProps.projectId}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: (data) => {
            dispatch(fetchTaskUpdate(data))
            dispatch(fetchEditTaskId(''))
        },
        addTask: (data, id) => {
            dispatch(fetchTaskAdd({
                id: nanoid(),
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
