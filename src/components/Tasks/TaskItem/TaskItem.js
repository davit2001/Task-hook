import React from 'react'
import { 
    Card, 
    CardHeader,
    CardContent,
    Typography
  } from '@material-ui/core';
  
import {format} from 'date-fns';
import TaskMenu from './TaskMenu';
import { useStyles } from './styles';

export default function ProjectItem({task}) {
  const classes = useStyles();
  return (
      <Card  elevation={1} className={classes.item}>
              <CardHeader
                  action = {
                    <TaskMenu id = {task.id}/>
                  }
                  title = {task.name }
                  subheader = {format(new Date(), 'd MMM Y')}
                >
               </CardHeader>
             
               <CardContent>
                 <Typography variant = "h6">
                     Name
                  </Typography>
                   <Typography variant = "body1"  color = "textSecondary" >
                          {task.assignee}
                   </Typography>

                   <Typography variant = "h6">
                      Description
                  </Typography>
                   <Typography variant = "body1">
                      {task.description}
                  </Typography>

                  <Typography variant = "h6">
                      Status
                  </Typography>
                  <Typography variant = "body1">
                     {task.status}
                  </Typography>
               </CardContent>
      </Card>
    )
}