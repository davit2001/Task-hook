import { connect } from 'react-redux';
import { fetchCloseTaskDialog, fetchEditTaskId } from '../UI/tasksUI';
import TaskMenu from '../components/TaskMenu'

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