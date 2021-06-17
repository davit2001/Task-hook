
import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { useStyles } from './styles';
import Masonry from 'react-masonry-css'
import { Container } from '@material-ui/core';

export default function TaskList({tasks}) {
    
    const breakpoints = {
        default: 3,
        1200: 2,
        700: 1
      }
      const classes = useStyles();
  return (
     <Container>
        <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      > {tasks.map(task => (
                <div className = {classes.item} >
                   <TaskItem key = {task.id} task = {task}/>
                </div>
            ))}
      </Masonry>
     </Container> 
    
    )
}