import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { tasksProjectSelector } from "../../projects/reducer";
import { indigo } from "@material-ui/core/colors";

const useStyles = makeStyles({
  heading: {
    color: indigo[700],
  },
});

export default function TasksProjectInfo({ projectId }) {
  const classes = useStyles();
  let projectTasks = useSelector(tasksProjectSelector(projectId));
  return (
    <>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        {projectTasks && (
          <Typography className={classes.heading} variant="h3" gutterBottom>
            {projectTasks.message}
          </Typography>
        )}
      </Box>
    </>
  );
}
