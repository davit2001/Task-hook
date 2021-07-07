import {connect} from "react-redux";
import {fetchTaskRemove} from "../actionCreators";
import {fetchCloseTaskDialog} from "../UI/tasksUI";

import TaskDialog from "../components/TaskDialog";

const mapStateToProps = (state) => {
    return {
         parentId: state.tasksUI.parentId,
         removeId: state.tasksUI.removeId,
         isOpenDialog: state.tasksUI.isOpenDialog
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: (removeId, parentId) => {
            dispatch(fetchTaskRemove(removeId, parentId))
            dispatch(fetchCloseTaskDialog(null, false))
        },
        closeProjectDialog: () => {
            dispatch(fetchCloseTaskDialog(null, false))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskDialog)
