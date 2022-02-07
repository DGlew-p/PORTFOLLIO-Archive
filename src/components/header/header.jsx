import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { HistoryEdu, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import DrawerComponent from "../drawer/drawer.jsx";
import { makeStyles } from "@material-ui/core/styles";
import CVPdf from "../../assets/img/CDPdf.pdf";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },

  buttonLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar position="static">
        <Box sx={{ flexGrow: 1 }}>
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              Navbar
            </Typography>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div>
                <NavLink to="/about" className={classes.link}>
                  About
                </NavLink>
                <NavLink to="/portfolio" className={classes.link}>
                  Portfolio
                </NavLink>
                <NavLink to="/skills" className={classes.link}>
                  Skills
                </NavLink>
                <NavLink to="/contact" className={classes.link}>
                  Connect
                  <IconButton size="large" color="inherit">
                    <Mail />
                  </IconButton>
                </NavLink>
                <a
                  href="https://www.linkedin.com/in/darren-glew/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton
                    size="large"
                    color="inherit"
                    className={classes.buttonLink}
                  >
                    <LinkedIn />
                  </IconButton>
                </a>
                <a
                  href="https://github.com/DGlew-p"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton
                    size="large"
                    color="inherit"
                    className={classes.buttonLink}
                  >
                    <GitHub />
                  </IconButton>
                </a>
                <a href={CVPdf} target="_blank" rel="noreferrer">
                  <IconButton
                    size="large"
                    aria-label=""
                    color="inherit"
                    className={classes.buttonLink}
                  >
                    <HistoryEdu />
                  </IconButton>
                </a>
              </div>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </React.Fragment>
  );
}
