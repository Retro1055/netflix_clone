import React,{useRef} from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import useStyles from './Styles';
import { Actors, Movies, MovieInfo, Profile, Navbar } from './index';
import useAlan from './Alan';

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/Actors/:id" element={<Actors />} />
          <Route exact path="/Profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
