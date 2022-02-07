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

const useStyles = makeStyles(() => ({
  NavLink: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
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
              <NavLink to="/about">About Me</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/portfolio">Portfolio </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/skills">Skills</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/contact">
                Connect
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
                <LinkedIn />
              </IconButton>
            </ListItem>
          </a>
          <a href="https://github.com/DGlew-p" target="_blank" rel="noreferrer">
            <ListItem onClick={() => setOpenDrawer(false)}>
              <IconButton size="large" aria-label="Git-Hub" color="inherit">
                <GitHub />
              </IconButton>
            </ListItem>
          </a>
          <a href={CVPdf} target="_blank" rel="noreferrer">
            <ListItem onClick={() => setOpenDrawer(false)}>
              <IconButton size="large" aria-label="CV" color="inherit">
                <HistoryEdu />
              </IconButton>
            </ListItem>
          </a>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
