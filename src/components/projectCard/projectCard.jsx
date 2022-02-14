import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CssBaseline,
  IconButton,
  useTheme,
} from "@mui/material";
import { GitHub, Public } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

export default function ProfileCard(props) {
  return (
    <React.Fragment>
      <Card sx={{ p: 1, m: 3 }}>
        <CardMedia
          component="img"
          height="400vw"
          width="400vw"
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
    </React.Fragment>
  );
}
