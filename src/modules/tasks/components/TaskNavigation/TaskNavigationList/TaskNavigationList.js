import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import TaskNavigationItem from "../TaskNavigationItem/TaskNavigationItem";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {projectTasksSelector} from "../../../reducer";
const useStyles = makeStyles({
    navigationContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    TreeView: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400
    }
})
export default function TaskNavigationList({projectId}) {
    const classes = useStyles();
    const tasks = useSelector(projectTasksSelector(projectId));

    const [expanded, setExpanded] = useState([]);
    const [selected, setSelected] = useState([]);

    const handleToggle = (nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (nodeIds) => {
        setSelected(nodeIds);
    };
    return (<Container>
        <Grid item>
            <Typography variant="h4" gutterBottom>
                Navigation
            </Typography>
        </Grid>
        <Grid item
            className={
                classes.navigationContainer
        }>
            <TreeView className={
                    classes.TreeView
                }
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}> {
                tasks.length ? (tasks.map((task) => <TaskNavigationItem key={
                        task.id
                    }
                    task={task}/>)) : (<Typography>Tasks does not exist</Typography>)
            } </TreeView>

        </Grid>
    </Container>);
}
