import {connect} from "react-redux";
import {fetchProjectRemove} from "../actionCreators";
import {fetchToggleProjectDialog} from "../UI/projectsUI";

import ProjectDialog from "../components/ProjectDialog";

const mapStateToProps = (state) => {
    return {removeId: state.projectsUI.removeId, isOpenDialog: state.projectsUI.isOpenDialog};
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeProject: (removeId) => {
            dispatch(fetchProjectRemove(removeId));
            dispatch(fetchToggleProjectDialog(null, false));
        },
        closeProjectDialog: () => {
            dispatch(fetchToggleProjectDialog(null, false));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDialog);
