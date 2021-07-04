import React from "react";
import { Container, Grid} from "@material-ui/core";

import ProjectList from "./ProjectList";
import FormDialog from "../container/FormDialog";
import ProjectDialog from "../container/ProjectDialog";
import { useStyles } from "./styles";

export default function Projects() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid className={classes.container}>
        <Grid item>
          <ProjectList />
        </Grid>
      </Grid>
      <ProjectDialog />
      <FormDialog />
    </Container>
  );
}
