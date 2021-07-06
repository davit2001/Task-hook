import React, {useEffect} from "react";
import {useStyles} from "./styles";
import {Link} from 'react-scroll'
import {fetchActiveClass} from "../../../UI/tasksUI";
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

export default function TaskNavigationItem({task}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchActiveClass(''))
    }, [])

    const active = useSelector(state => state.tasksUI.activeClass)

    const handleChange = (id) => {
        dispatch(fetchActiveClass(id))
    }

    return (
        <Link className= {[classes.root, task.id == active ? classes.active : null].join(' ')} activeClass="active" onClick= {() => handleChange(task.id)}
            to={
                task.id
            }
            smooth={true}
            duration={250}
            containerId="container">
            <Typography> {
                task.name
            } </Typography>
        </Link>
    );
}
