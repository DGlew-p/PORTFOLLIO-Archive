import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProfileCard(props) {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          src={`${props.image}`}
          alt="screenshot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.pName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.info}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.stack}
          </Typography>
          {props.gitLink}
          {props.depLink}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
