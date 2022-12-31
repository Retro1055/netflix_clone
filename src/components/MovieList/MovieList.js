import React from 'react';
import { Grid } from '@mui/material';
import { Movie } from '..';

import useStyles from './styles';

function MovieList({ movies,noOfMovies }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.moviesContainer}>
        {movies.results.slice(0,noOfMovies).map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>
    </div>
  );
}

export default MovieList;
