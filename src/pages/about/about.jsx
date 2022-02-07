import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import cardImg0 from "../../assets/img/linkShot.jpg";

export default function About(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Card sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column+",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "stretch",
            p: 1,
            m: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", p: 3, m: 3 }}>
            <CardContent sx={{ flex: "center" }}>
              <Typography component="div" variant="h5">
                Hello my name is Darren
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <div>
                  <div>Problem solver and system builder.</div>
                  <div>
                    Eager to apply my experience delivering product and projects
                    to a career in software development.
                  </div>
                  <div>
                    <div>Core Values</div>
                    <div>
                      <div>
                        Driven to exceed benchmarks in quality, client
                        satisfaction, and growth.
                      </div>
                      <div>
                        Passionate about team building and helping others
                        develop to their greatest potential.
                      </div>
                      <div>
                        Creative problem solver by nature, with an intrinsic
                        belief continual improvement.
                      </div>
                      <div>
                        Striving for deeper understanding of best practices,
                        from objective assessment of the right stack for the
                        project, to empowering coworker relationships.
                      </div>
                      <div>
                        Analytic, results-focused approach to challenges
                        achieves optimal outcomes for stakeholders.
                      </div>
                    </div>
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Box>

          <CardMedia
            component="img"
            sx={{ width: 300 }}
            src={cardImg0}
            alt="head shot"
          />
        </Box>
      </Card>
      //{" "}
    </Box>
  );
}
