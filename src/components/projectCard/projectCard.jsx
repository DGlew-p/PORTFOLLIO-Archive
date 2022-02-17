import React from "react";
import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@mui/material/colors";
import { GitHub, Public } from "@mui/icons-material";

export default function ProfileCard(props) {
  return (
    <Card sx={{ p: 2, m: 2 }} elevation="2">
      <CardContent>
        <Box
          display="flex"
          height="100%"
          justifyContent="space-between"
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.pName}
          </Typography>
          <CardMedia
            display="flex"
            component="img"
            height="400vw"
            width="200vw"
            src={`${props.image}`}
            alt="screenshot"
          />

          <Box
            display="flex"
            height="100%"
            justifyContent="space-between"
            sx={{
              flexDirection: "column",
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
              sx={{ p: 1, m: 1, justifyContent: "center" }}
            >
              {props.stack}
            </Typography>
            <Box
              display="flex"
              sx={{
                p: 1,
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
  );
}
