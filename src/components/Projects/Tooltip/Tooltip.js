import React from 'react'
import {Typography, IconButton, withStyles} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './styles';

export default function Tooltip({setOpenForm}) {
    const classes = useStyles();

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }))(Tooltip);

    return (
        <>
           <HtmlTooltip title= {
                   <Typography variant = "body2">Create a project</Typography> 
            }>
                <IconButton className = {classes.iconButton} onClick = {() => setOpenForm(true)} >
                     <AddIcon />
                </IconButton>
           </HtmlTooltip>
        </>
    )
}
