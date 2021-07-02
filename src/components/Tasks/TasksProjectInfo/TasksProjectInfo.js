import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { tasksProjectSelector } from '../../../reducer/projects/projectsReducer';
import { indigo} from '@material-ui/core/colors';

const useStyles = makeStyles({
    heading: {
        color: indigo[700]
    }
})

export default function TasksProjectInfo({projectId}) {
    const classes = useStyles()
   let projectTasks = useSelector(tasksProjectSelector(projectId));
    return (
        <>
        <Box display="flex" justifyContent="center" m={1} p={1}>
            <Box>
                <Typography className = {classes.heading} variant = "h2"   gutterBottom>
                  {projectTasks.title}
                </Typography>
                 <Typography className = {classes.heading} variant = "h5" >
                  {projectTasks.message}
                 </Typography>
            </Box>
       </Box>
        </>
    )
}