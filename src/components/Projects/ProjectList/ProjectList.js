import React from 'react'
import ProjectItem from '../ProjectItem/ProjectItem'
import { useStyles } from './styles'
import Masonry from 'react-masonry-css'
import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function ProjectList() {

 const breakpoints = {
   default: 3,
   1130: 2,
   540: 1
 }
 
 const classes = useStyles();

 const projects = useSelector((state) => state.projects)

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
           { projects.map(project => (
             <div  key = {project.id} className = {classes.item}>
                <ProjectItem    project = {project}/>
             </div>
            )) }
      </Masonry>
    </Container>
  )
}
