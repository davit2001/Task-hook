import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';
export default function TasksProjectInfo({projectId}) {
   let projectTasks = useSelector((state) => state.projects.filter(project => project.id === projectId));
    return (
        <>
        <Box display="flex" justifyContent="center" m={1} p={1}>
            <Box>
                <Typography variant = "h2" gutterBottom>
                  {projectTasks[0].title}
                </Typography>
                 <Typography variant = "h5">
                  {projectTasks[0].message}
                 </Typography>
            </Box>
       </Box>
        </>
    )
}
