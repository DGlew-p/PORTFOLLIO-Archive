import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Box, Card, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Skills(props) {
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",
          alignContent: "stretch",
          minWidth: "fit-content",
          flexWrap: "wrap",
          p: 3,
          m: 1,
        }}
      >
        <Typography component="div" variant="h5">
          Tools I Have Experience In
        </Typography>

        <Box sx={{ flexGrow: 1, p: 3, m: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4}>
              <Item>JavaScript</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>REACTjs</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>NodeJS</Item>
            </Grid>

            <Grid item xs={4}>
              <Item>Python</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Django</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>PostgreSQL</Item>
            </Grid>

            <Grid item xs={4}>
              <Item>ExpressJS</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Mongoose</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>mongoDB</Item>
            </Grid>

            <Grid item xs={4}>
              <Item>HTML</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>CSS</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Git / Git-Hub</Item>
            </Grid>

            <Grid item xs={4}>
              <Item>Agile / SCRUM </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Integration with Google + AWS APIs</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Linux CLI</Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
