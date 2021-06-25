import React from 'react'
import  {
    Card,
    CardHeader,
    CardContent,
    Typography, 
  } from '@material-ui/core'
import {format} from 'date-fns';
import { useStyles } from './styles';

export default function TaskSearchItem({task}) {
    const classes = useStyles()
    return (
        <>
            <Card className = {classes.item}>
               <CardHeader
                 title = {task.name}
                 subheader = {format(new Date(), 'd MMM Y')}
               >
              </CardHeader>
              <CardContent>
                   <Typography variant = "h6">
                      Description   
                    </Typography> 
                    <Typography variant = "body1">
                        {task.description}
                    </Typography>
              </CardContent>
            </Card>
        </>
    )
}
