import FormDialog from "../components/FormDialog";
import {nanoid} from "nanoid";
import {connect} from "react-redux";

import {fetchProjectAdd, fetchProjectUpdate} from "../actionCreators";
import {fetchToggleProjectForm, fetchEditProjectId} from "../UI/projectsUI";

const mapStateToProps = (state) => {
    return {projects: state.projects.data, editId: state.projectsUI.editId, isOpenForm: state.projectsUI.isOpenForm};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateProject: (data) => {
            dispatch(fetchProjectUpdate(data));
            dispatch(fetchEditProjectId(""));
        },
        addProject: (
            {title, message, image}
        ) => dispatch(fetchProjectAdd({id: nanoid(), title, message, image})),
        closeProjectForm: () => {
            dispatch(fetchToggleProjectForm(false));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);
