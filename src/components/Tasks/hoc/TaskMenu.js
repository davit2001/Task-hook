import { connect } from 'react-redux';
import { fetchCloseTaskDialog, fetchEditTaskId } from '../../../action/tasksUI';
import TaskMenu from '../TaskItem/TaskMenu'

const mapStateToProps = (state, ownProps) => {
   return {
       id: ownProps.id
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
    closeTaskDialog: (id) => {
        dispatch(fetchCloseTaskDialog(id, true))
    },
    editTask: (id) => {
        dispatch(fetchEditTaskId(id))
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskMenu)