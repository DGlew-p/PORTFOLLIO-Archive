import React from "react";
import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";

import { lightBlue } from "@mui/material/colors";
import { GitHub, Public } from "@mui/icons-material";

export default function ProfileCard(props) {
  return (
    <Grid item display="flex" md={4}>
      <Card sx={{ m: 2 }} elevation={2}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {props.pName}
            </Typography>
            <CardMedia
              display="flex"
              component="img"
              height="200vw"
              src={`${props.image}`}
              alt="screenshot"
            />

            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                display="flex"
                variant="body2"
                color="text.secondary"
                sx={{ p: 1, m: 1 }}
              >
                {props.info}
              </Typography>

              <Typography
                display="flex"
                variant="body1"
                color="text.secondary"
                sx={{ p: 1, justifyContent: "center" }}
              >
                {props.stack}
              </Typography>
              <Box
                display="flex"
                sx={{
                  m: 1,
                  justifyContent: "center",
                }}
              >
                <a href={props.gitLink} target="_blank" rel="noreferrer">
                  <IconButton size="large" color="inherit" sx={{ p: 1, m: 1 }}>
                    <GitHub sx={{ color: lightBlue[800] }} />
                  </IconButton>
                </a>
                <a href={props.depLink} target="_blank" rel="noreferrer">
                  <IconButton size="large" color="inherit" sx={{ p: 1, m: 1 }}>
                    <Public sx={{ color: lightBlue[800] }} />
                  </IconButton>
                </a>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
