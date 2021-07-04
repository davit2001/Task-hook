import React from "react";
import { Card, CardHeader } from "@material-ui/core";
import { useStyles } from "./styles";

export default function TaskNavigationItem({ task }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={task.name}></CardHeader>
    </Card>
  );
}
