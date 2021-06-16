import React from 'react'
import { 
    Card, 
    CardHeader,
    CardContent, 
    Avatar,
    Paper
  } from '@material-ui/core';


import { Typography } from '@material-ui/core';
import {format} from 'date-fns';
import "@reach/menu-button/styles.css";

import { useStyles } from './styles';
import TaskMenu from './TaskMenu';

export default function TaskItem({task}) {
  return (
       <Paper elevation={8}>
           <Card>
           <CardHeader
             avatar = {
                 <Avatar src = "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"/>
             }
             action = {
              <TaskMenu />
              }
             title = {task.text}
             subheader = {format(new Date(), 'd MMM Y')}
           >
          </CardHeader>
        
          <CardContent>
              <Typography >
                     {task.message}
              </Typography>
          </CardContent>
        </Card>
       </Paper>
        
    )
}
