import React from "react";
import { Paper, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProfileCard(props) {
  return (
    <React.Fragment>
      <Paper className="MuiPaper-root-2380 MuiCard-root-2379 jss2371 jss2375 MuiPaper-elevation1-2384 MuiPaper-rounded-2381">
        <Card sx={{}}>
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
      </Paper>
    </React.Fragment>
  );
}
