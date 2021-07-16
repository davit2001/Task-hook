import React from "react";
import {Link} from 'react-scroll'
import {fetchActiveClass} from "../../../UI/tasksUI";
import TreeItem from '@material-ui/lab/TreeItem';
import {withStyles} from "@material-ui/core";
import {useDispatch} from "react-redux";


export default function TaskNavigationItem({task}) {
    const dispatch = useDispatch();

    const setActiveTask = (id) => {
        dispatch(fetchActiveClass(id))
    }
    const StyledTreeItem = withStyles({
        label: {
          padding: "5px",
            "&:focus": {
                backgroundColor: "#2196f3",
                color: "#fff",
            },
            "&:active": {
                backgroundColor: "#2196f3",
                color: "#fff"
            },
            "&:hover": {
                backgroundColor: "#2196f3",
                color: "#fff"
            }
        }
    })(TreeItem);

    const renderTree = (task) => (
        <Link onClick={
                () => setActiveTask(task.id)
            }
            activeClass="active"
            to={
                task.id
            }
            key={
                task.id
            }
            smooth={true}
            spy={true}
            duration={250}
            containerId="container">
            <StyledTreeItem key={
                    task.id
                }
                nodeId={
                    task.id
                }
                label={
                    task.name
            }>
                {
                task.children && task.children.map((task) => renderTree(task))
            } </StyledTreeItem>
        </Link>
    );
    return (
        <> {
            renderTree(task)
        } </>
    );
}
