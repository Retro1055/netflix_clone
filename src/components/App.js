import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import useStyles from './Styles';
import { Actors, Movies, MovieInfo, Profile, NavBar } from './index';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/Actors/:id" element={<Actors />} />
          <Route exact path="/Profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
