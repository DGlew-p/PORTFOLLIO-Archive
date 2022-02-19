import React from "react";
import { projects } from "../../assets/models/projects";
import ProjectCard from "../../components/projectCard/projectCard.jsx";
import { Grid, Typography, Box, Item } from "@mui/material";

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
        height="10vh"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography
            variant="h5"
            component="div"
            sx={{ p: 1, color: "info.main" }}
          >
            Projects I've Worked On
          </Typography>
        </Grid>
        <Box
          container
          display="flex"
          direction="column"
          sx={{
            flexWrap: "wrap",
          }}
        >
          {this.state.projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Box>
      </Grid>
    );
  }
}
