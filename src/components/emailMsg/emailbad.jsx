import React from "react";
import { Typography, IconButton, Link, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function EmailBad() {
  return (
    <>
      <Typography variant="h5" sx={{ color: "warning.main" }}>
        Sorry about that...Something went wrong.
      </Typography>
      <Button
        aria-label="message on LinkedIn"
        href="https://www.linkedin.com/in/darren-glew/"
        target="_blank"
        rel="noreferrer"
        sx={{
          minWidth: 300,
          color: "primary",
          padding: 1,
          margin: 2,
        }}
        variant="outlined"
        endIcon={<SendIcon />}
      >
        Send me a message on LinkedIn
      </Button>
    </>
  );
}
