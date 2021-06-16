import React from 'react'
import { Paper, TextField, Button, makeStyles, Typography } from '@material-ui/core'
import FileBase from 'react-file-base64';

import { useStyles } from './styles';

export default function TaskList() {
    const classes = useStyles()
    return (
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form}>
                <Typography 
                    variant = "h4"
                     component="h2"
                     gutterBottom
                     color = "textSecondary"
                     align = "center"
                 > Create Project
                </Typography>
                <TextField 
                    label = "Name" 
                    variant="outlined"
                    color = "primary"
                    fullWidth
                    margin="normal"
                 />

                <TextField 
                   label = "Summary" 
                   variant="outlined" 
                   fullWidth 
                   margin="normal"  
                />
               <div className={classes.fileInput}><FileBase type="file" multiple={false} /></div>

               <Button 
                  variant = "contained"
                  fullWidth
                  color = "primary"
                 className = {classes.btn}
                > Add </Button>

            </form>
        </Paper>
    )
}