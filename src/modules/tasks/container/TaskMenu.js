import {connect} from 'react-redux';
import {fetchCloseTaskDialog, fetchEditTaskId, fetchTaskId} from '../UI/tasksUI';
import TaskMenu from '../components/TaskMenu'

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        parentId: ownProps.parentId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeTaskDialog: (id, parentId) => {
            dispatch(fetchCloseTaskDialog(id, parentId, true))
        },
        editTask: (id, parentId) => {
            dispatch(fetchEditTaskId(id, parentId))
        },
         addTaskId: (id, bool) => {
            dispatch(fetchTaskId(id, bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskMenu)
