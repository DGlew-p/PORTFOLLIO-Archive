import React from "react";
import { NavLink } from "react-router-dom";
import {
  Link,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";

import { HistoryEdu, GitHub, LinkedIn, Mail } from "@mui/icons-material";

import { makeStyles } from "@material-ui/core/styles";
import CVPdf from "../../assets/img/CDPdf.pdf";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  iconLink: {
    color: grey[100],

    marginLeft: theme.spacing(1),
  },
  topog: {
    color: grey[100],

    marginLeft: theme.spacing(1),
    "&:hover": { cursor: "default" },
  },
  linkTopog: {
    color: grey[100],

    marginLeft: theme.spacing(1),
  },

  navLink: {
    color: grey[100],
    textDecoration: "none",
    marginLeft: theme.spacing(1),
    "&:hover": { borderBottom: "1px solid white" },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!isMobile && (
        <>
          <Toolbar />
          <AppBar
            display="flex"
            position="fixed"
            color="primary"
            sx={{ top: "auto", bottom: 0, margin: "5" }}
          >
            <Toolbar>
              <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <Grid item>
                  <Typography
                    className={classes.topog}
                    sx={{ m: "10", p: "2" }}
                    variant="h6"
                  >
                    I'd love to connect!
                  </Typography>
                </Grid>
                <Grid item>
                  <NavLink to="/contact" className={classes.navLink}>
                    <IconButton size="large" color="inherit">
                      <Typography className={classes.topog}>Email</Typography>
                      <Mail className={classes.iconLink} />
                    </IconButton>
                  </NavLink>

                  <Link
                    className={classes.navLink}
                    href="https://www.linkedin.com/in/darren-glew/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton size="large">
                      <Typography className={classes.linkTopog}>
                        LinkedIn
                      </Typography>
                      <LinkedIn className={classes.iconLink} />
                    </IconButton>
                  </Link>
                  <Link
                    className={classes.navLink}
                    href="https://github.com/DGlew-p"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton size="large">
                      <Typography className={classes.linkTopog}>Git</Typography>
                      <GitHub className={classes.iconLink} />
                    </IconButton>
                  </Link>

                  <Link
                    className={classes.navLink}
                    href={CVPdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton size="large" aria-label="">
                      <Typography className={classes.linkTopog}>
                        C.V.
                      </Typography>
                      <HistoryEdu className={classes.iconLink} />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </>
      )}
    </>
  );
}
