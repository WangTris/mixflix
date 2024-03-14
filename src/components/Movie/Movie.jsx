import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const Movie = ({ movie, index }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ padding: "10px" }}>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.primary,
          textOverflow: "ellipsis",
          width: "230px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          mt: "10px",
          mb: "0",
          textAlign: "center",
        }}
      >
        {movie.title}
      </Typography>
    </Grid>
  );
};

export default Movie;
