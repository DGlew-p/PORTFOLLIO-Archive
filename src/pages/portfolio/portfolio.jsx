import React from "react";
import { projects } from "../../assets/models/projects";
import ProjectCard from "../../components/projectCard/projectCard.jsx";

import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
    };
  }

  render() {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 4, md: 4 }}
        height="95%"
      >
        <Grid item xs={4} md={12}>
          <Typography variant="h3" component="div" m="10">
            Projects I've Built
          </Typography>
        </Grid>
        <Grid container>
          {this.state.projects.map((project) => (
            <Grid
              item
              item
              xs={4}
              sx={{ minWidth: 200 }}
              justifyContent="center"
            >
              <ProjectCard key={project.id} {...project} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}
