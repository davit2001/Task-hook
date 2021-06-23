import React from 'react'
import { 
    Card, 
    CardHeader,
    CardContent, 
    Avatar,
    Typography
  } from '@material-ui/core';
  
import {format} from 'date-fns';
import "@reach/menu-button/styles.css";
import TaskMenu from './TaskMenu';

export default function TaskItem({task}) {
   return (
      <Card  elevation={1}>
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
              <Typography variant = "body2"  color = "textSecondary" >
                     {task.message}
              </Typography>
          </CardContent>
        </Card>
    )
}
