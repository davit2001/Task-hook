import { connect } from 'react-redux';
import { fetchToggleProjectDialog, fetchEditProjectId } from '../../../action/projectsUI';
import ProjectMenu from '../ProjectItem/ProjectMenu'

const mapStateToProps = (state, ownProps) => {
   return {
       id:ownProps.id
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
    closeProjectDialog: (id) => {
        dispatch(fetchToggleProjectDialog(id, true))
    },
    editProject: (id) => {
        dispatch(fetchEditProjectId(id))
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu)