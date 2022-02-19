import React from "react";
import { Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function SkillsItem(props) {
  return (
    <Paper sx={{ bgcolor: "info.main" }}>
      <Typography sx={{ color: grey[100], p: 2 }}>{props.pSkill}</Typography>
    </Paper>
  );
}
