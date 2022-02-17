import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./about.css";

export default function About(props) {
  return (
    <Box
      sx={{ flexDirection: "column", p: 1, topMargin: 5, bottomMargin: 5 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={5}
      >
        <Grid item>
          <Typography component="div" variant="h3" color="info.main">
            Hello my name is Darren Glew
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <div>Problem solver and system builder,</div>

            <div>
              eager to apply my experience delivering product and projects to a
              career in software development.
            </div>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h6" color="info.main" component="div">
            Core Values
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <div>
              A creative problem solver by nature, with an intrinsic belief
              continual improvement,
            </div>
            <div>I'm: </div>
            <div>
              Driven to exceed benchmarks in quality, client satisfaction, and
              growth.
            </div>
            <div>
              Passionate about team building and helping others develop to their
              greatest potential.
            </div>

            <div>
              Striving for deeper understanding of best practices, from
              objective assessment of the right stack for the project, to
              empowering coworker relationships.
            </div>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
