import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Box, Card, Typography } from "@mui/material";
import { skills } from "../../assets/models/projects";
import SkillsItem from "../../components/skillsItem/skillsItem";

export default function Skills(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        p: 1,
        m: 1,
      }}
    >
      <Typography
        sx={{ p: 1, m: 5, color: "info.dark" }}
        component="div"
        variant="h4"
      >
        Tools I Have Experience In
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {skills.map((skills) => (
          <Grid item xs={4}>
            <SkillsItem key={skills.id} {...skills} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
