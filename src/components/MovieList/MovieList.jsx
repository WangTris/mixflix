import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// components
import { Movie } from "../index";

const MovieList = ({ movies }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        overflow: "auto",
        [theme.breakpoints.down("sm")]: {
          justifyContent: "center",
        },
      }}
    >
      {movies.results.map((movie, index) => (
        <Movie key={index} movie={movie} index={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
