import React from 'react'
import { 
    Card, 
    CardHeader,
    CardContent,
    Avatar,
    Typography,
    makeStyles,
  } from '@material-ui/core';

import {format} from 'date-fns';
import ProjectMenu from './ProjectMenu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  Link: {
    textDecoration: 'none'
  }
})

export default function ProjectItem({project}) {
  const classes = useStyles()
   return (
    <Link to = {`/${project.id}`} className = {classes.Link}>
    <Card  elevation={1}>
           <CardHeader
                avatar = {
                      <Avatar src = {project.image}/>
                  }
                  action = {
                    <ProjectMenu id = {project.id}/>
                  }
                  title = {project.title}
                  subheader = {format(new Date(), 'd MMM Y')}
                >
               </CardHeader>
             
               <CardContent>
                   <Typography variant = "body2"  color = "textSecondary" >
                          {project.message}
                   </Typography>
               </CardContent>
       </Card>
    </Link>
      
   
    )
}