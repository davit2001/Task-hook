import React, {useEffect} from "react";
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";

import {format} from "date-fns";
import TaskMenu from "../../container/TaskMenu";
import {useStyles} from "../styles";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {fetchActiveClass} from "../../UI/tasksUI";

export default function TaskItem({task}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchActiveClass(''))
    }, [])

    const active = useSelector(state => state.tasksUI.activeClass)

    return (
        <>
            <Card elevation={
                    task.id == active ? 8 : 1
                }
                className={
                    classes.item
                }
                id={
                    task.id
            }>
                <CardHeader action= {
                                         <TaskMenu id={task.id} />
                                      }
                    title={
                        task.name
                    }
                    subheader={
                        format(new Date(), "d MMM Y")
                }></CardHeader>

                <CardContent>
                    <Typography variant="h6">
                        Name
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {
                        task.assignee
                    } </Typography>

                    <Typography variant="h6">
                        Description
                    </Typography>
                    <Typography variant="body1">
                        {
                        task.description
                    }</Typography>

                    <Typography variant="h6">
                        Status
                    </Typography>
                    <Typography variant="body1">
                        {
                        task.status
                    }</Typography>
                </CardContent>
            </Card>
            {
               task.children && 
                  <> 
                    { task.children.map((task) => {
                          return (
                              <div key={
                                      task.id
                                  }
                                  className ={classes.children}
                              >
                                  <TaskItem key={
                                          task.id
                                      }
                                      task={task}
                                  />
                              </div>
                          )
                      })
                   } 
                </>
        } </>
    );
}
