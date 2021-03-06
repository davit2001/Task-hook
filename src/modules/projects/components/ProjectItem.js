import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { format } from "date-fns";
import ProjectMenu from "../container/ProjectMenu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    cursor: "pointer"
  }
});

export default function ProjectItem({ project }) {
  const classes = useStyles();
  let history = useHistory();
  const RedirectTask = () => {
    history.push(`/${project.id}`);
  };
  return (
    <Card 
       elevation={1} 
       onClick={RedirectTask}
       className = {classes.root}
    >
        <CardHeader
          avatar={<Avatar src={project.image} />}
          action={<ProjectMenu id={project.id} />}
          title={project.title}
          subheader={format(new Date(), "d MMM Y")}
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {project.message}
          </Typography>
        </CardContent>
    </Card>
  );
}