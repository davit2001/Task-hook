import React from 'react'
import ProjectItem from '../TaskItem/TaskItem'
import { useStyles } from './styles'
import Masonry from 'react-masonry-css'
import { Container, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function ProjectList({projectId}) {
    const tasks = useSelector((state) => state.tasks.tasks.filter(task => task.projectId == projectId))

 const breakpoints = {
   default: 3,
   1130: 2,
   540: 1
 }
 
 const classes = useStyles();
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
