import {connect} from "react-redux";
import {fetchToggleProjectDialog, fetchEditProjectId} from "../UI/projectsUI";
import ProjectMenu from "../components/ProjectMenu";

const mapStateToProps = (state, ownProps) => {
    return {id: ownProps.id};
};
const mapDispatchToProps = (dispatch) => {
    return {
        closeProjectDialog: (id) => {
            dispatch(fetchToggleProjectDialog(id, true));
        },
        editProject: (id) => {
            dispatch(fetchEditProjectId(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu);
