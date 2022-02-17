import React from "react";
import { projects } from "../../assets/models/projects";
import ProjectCard from "../../components/projectCard/projectCard.jsx";
import { Grid, Typography, Box } from "@mui/material";

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
        spacing={{ xs: 1, md: 2 }}
        height="90%"
        justifyContent="center"
      >
        <Grid item>
          <Typography
            variant="h3"
            component="div"
            sx={{ p: 1, m: 1, color: "info.main" }}
          >
            Projects I've Built
          </Typography>
        </Grid>
        <Box
          container
          display="flex"
          direction="column"
          sx={{
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
          columns={{ xs: 4, md: 12 }}
        >
          {this.state.projects.map((project) => (
            <Grid container display="flex" xs={12} md={4}>
              <ProjectCard key={project.id} {...project} />
            </Grid>
          ))}
        </Box>
      </Grid>
    );
  }
}
