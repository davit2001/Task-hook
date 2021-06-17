import React from 'react'
import { 
    Card, 
    CardHeader,
    CardContent, 
    Avatar
  } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {format} from 'date-fns';
import "@reach/menu-button/styles.css";
import TaskMenu from './TaskMenu';
import { useStyles } from './styles';


export default function TaskItem({task}) {
  const classes = useStyles()
  return (
      <Card className = {classes.root} elevation={8}>
           <CardHeader
             avatar = {
                 <Avatar src = {task.image}/>
             }
             action = {
              <TaskMenu id = {task.id}/>
              }
             title = {task.title}
             subheader = {format(new Date(), 'd MMM Y')}
           >
          </CardHeader>
        
          <CardContent>
              <Typography >
                     {task.message}
              </Typography>
          </CardContent>
        </Card>
    )
}
