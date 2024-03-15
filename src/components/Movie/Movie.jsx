import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const Movie = ({ movie, index }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ padding: "10px" }}>
      <Grow in key={index} timeout={(index + 1) * 250}>
        <Link
          style={{
            alignItems: "center",
            fontWeight: "bolder",
            textDecoration: "none",
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
            },
            "&:hover": {
              cursor: "pointer",
            },
          }}
          to={`/movie/${movie.id}`}
        >
          <img
            style={{
              borderRadius: "20px",
              height: "300px",
              mb: "10px",
              "&:hover": { transform: "scale(1.05)" },
            }}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://fillmurray.com/200/300"
            }
            alt={movie.title}
          />
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
          <Tooltip disableTouchListener title={`${movie.vote_average}/10`}>
            <Box>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </Box>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
