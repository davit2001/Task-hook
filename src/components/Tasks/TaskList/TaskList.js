import React from 'react'
import ProjectItem from '../TaskItem/TaskItem'
import Masonry from 'react-masonry-css'
import { Container, Typography, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { projectTasksSelector } from '../../../reducer/taskReducer'

const useStyles = makeStyles({
  container: {
      display: "flex",
       alignIitems: "center",
       flexDirection: "row",
       flexWrap: "wrap"
    },
    item: {
        maxWidth: 300,
       wordWrap: 'break-word'
    }
})

export default function ProjectList({projectId}) {
  const classes = useStyles()
  const tasks = useSelector(projectTasksSelector(projectId))

 const breakpoints = {
   default: 3,
   1130: 2,
   540: 1
 }

  return (
    <Container>
     {tasks.length ? <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
           { tasks.map(task => (
             <div  key = {task.id} className = {classes.item}>
                <ProjectItem    task = {task}/>
             </div>
            )) }
      </Masonry> : (
        <Typography variant = "body1">
           Task does not exist
        </Typography>
      )} 
    </Container>
  )
}
