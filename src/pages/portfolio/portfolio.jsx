import React from "react";
import { projects } from "../../assets/models/projects";
import ProjectCard from "../../components/projectCard/projectCard.jsx";

import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
    };
  }

  render() {
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));
    return (
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <Grid container spacing={2}>
          {this.state.projects.map((project) => (
            <Grid item xs={12}>
              <ProjectCard
                key={project.id}
                props={this.state.projects}
                {...project}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}
