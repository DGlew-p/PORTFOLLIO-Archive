import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { HistoryEdu, GitHub, LinkedIn, Menu, Mail } from "@mui/icons-material";
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
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/about" className={classes.NavLink}>
                About Me
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/portfolio" className={classes.NavLink}>
                Portfolio{" "}
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/skills" className={classes.NavLink}>
                Skills
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/contact" className={classes.NavLink}>
                <IconButton size="large" color="inherit">
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
              <IconButton size="large" aria-label="LinkedIn" color="inherit">
                <LinkedIn className={classes.icon} />
              </IconButton>
            </ListItem>
          </a>
          <a href="https://github.com/DGlew-p" target="_blank" rel="noreferrer">
            <ListItem onClick={() => setOpenDrawer(false)}>
              <IconButton size="large" aria-label="Git-Hub" color="inherit">
                <GitHub className={classes.icon} />
              </IconButton>
            </ListItem>
          </a>
          <a href={CVPdf} target="_blank" rel="noreferrer">
            <ListItem onClick={() => setOpenDrawer(false)}>
              <IconButton size="large" aria-label="CV" color="inherit">
                <HistoryEdu className={classes.icon} />
              </IconButton>
            </ListItem>
          </a>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu className={classes.menuIcon} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
