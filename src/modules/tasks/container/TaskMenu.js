import {connect} from 'react-redux';
import {fetchCloseTaskDialog, fetchEditTaskId, fetchTaskId} from '../UI/tasksUI';
import TaskMenu from '../components/TaskMenu'

const mapStateToProps = (state, ownProps) => {
    return {id: ownProps.id}
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeTaskDialog: (id) => {
            dispatch(fetchCloseTaskDialog(id, true))
        },
        editTask: (id) => {
            dispatch(fetchEditTaskId(id))
        },
         addTaskId: (id, bool) => {
            dispatch(fetchTaskId(id, bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskMenu)
