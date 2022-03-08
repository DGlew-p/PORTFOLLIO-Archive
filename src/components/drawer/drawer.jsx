import React, { useState } from "react";
import {
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { HistoryEdu, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CVPdf from "../../assets/img/CDPdf.pdf";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles(() => ({
  NavLink: {
    textDecoration: "none",
    color: grey[600],
    fontSize: "20px",
  },
  icon: {
    color: grey[600],
  },
  menuIcon: {
    color: grey[200],
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  let [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/contact" className={classes.NavLink}>
                <IconButton color="inherit">
                  <Mail />
                </IconButton>
              </NavLink>
            </ListItemText>
          </ListItem>

          <a
            href="https://www.linkedin.com/in/darren-glew/"
            target="_blank"
            rel="noreferrer"
          >
            <ListItem onClick={() => setOpenDrawer(false)}>
              <IconButton aria-label="LinkedIn" color="inherit">
                <LinkedIn className={classes.icon} />
              </IconButton>
            </ListItem>
          </a>
          <a href="https://github.com/DGlew-p" target="_blank" rel="noreferrer">
            <ListItem onClick={() => setOpenDrawer(false)}>
              <IconButton aria-label="Git-Hub" color="inherit">
                <GitHub className={classes.icon} />
              </IconButton>
            </ListItem>
          </a>
          <a href={CVPdf} target="_blank" rel="noreferrer">
            <ListItem onClick={() => setOpenDrawer(false)}>
              <IconButton aria-label="CV" color="inherit">
                <HistoryEdu className={classes.icon} />
              </IconButton>
            </ListItem>
          </a>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="CV"
        color="inherit"
      >
        <ConnectWithoutContactIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
