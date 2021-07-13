import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import {blue} from '@material-ui/core/colors';

import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {tasksProjectSelector} from '../modules/projects/reducer';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        "&:active": {
            color: blue[300]
        },
        color: blue[500],
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function Header() {
    const classes = useStyles();
    const {pathname} = useLocation()
    const projectId = pathname.split('/')[1];
    let projectTasks = useSelector(tasksProjectSelector(projectId));
    const dispatch = useDispatch()

    return (
        <div className={
            classes.root
        }>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/">
                        <IconButton edge="start"
                            className={
                                classes.menuButton
                            }
                            aria-label="menu">
                            <HomeIcon/>
                        </IconButton>
                    </Link>

                    <Typography variant="h6"
                        className={
                            classes.title
                    }>
                        {
                        projectTasks ? projectTasks.title : 'Projects'
                    } </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
