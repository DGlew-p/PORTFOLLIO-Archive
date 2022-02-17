import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { GitHub, Public } from "@mui/icons-material";

export default function ProfileCard(props) {
  return (
    <Card sx={{ p: 2, m: 2 }}>
      <Typography gutterBottom variant="h5" component="div">
        {props.pName}
      </Typography>
      <CardMedia
        component="img"
        height="400vw"
        width="200vw"
        src={`${props.image}`}
        alt="screenshot"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.info}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.stack}
        </Typography>
        <a href={props.gitLink} target="_blank" rel="noreferrer">
          <IconButton size="large" color="inherit">
            <GitHub color="action" />
          </IconButton>
        </a>
        <a href={props.depLink} target="_blank" rel="noreferrer">
          <IconButton size="large" color="inherit">
            <Public color="action" />
          </IconButton>
        </a>
      </CardContent>
    </Card>
  );
}
