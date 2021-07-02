import { connect } from "react-redux";
import { fetchTaskRemove } from "../../../../action/tasks"; 
import { fetchCloseTaskDialog } from "../../../../action/tasksUI"; 

import TaskDialog from "../../Dialog/TaskDialog";

const mapStateToProps = (state) => {
      return {
        removeId: state.tasksUI.removeId,
        isOpenDialog:  state.tasksUI.isOpenDialog
      }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
        removeTask: (removeId) => {
            dispatch(fetchTaskRemove(removeId))
            dispatch(fetchCloseTaskDialog(null, false))
        },
        closeProjectDialog: () => {
            dispatch(fetchCloseTaskDialog(null, false))
        }
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(TaskDialog)