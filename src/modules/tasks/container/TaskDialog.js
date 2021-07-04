import { connect } from "react-redux";
import { fetchTaskRemove } from "../actionCreators"; 
import { fetchCloseTaskDialog } from "../UI/tasksUI"; 

import TaskDialog from "../components/TaskDialog";

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