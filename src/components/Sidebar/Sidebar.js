import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { selectGenreOrCategory } from '../../Features/currentGenreOrCategory';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const blueLogo = 'https://www.kindpng.com/picc/m/110-1101170_netflix-new-icon-netflix-blue-icon-png-transparent.png';
const redLogo = 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png';

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  return (
    <>
      <Link
        to="/"
        className={classes.ImageLink}
      >
        <img
          className={classes.Image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt="Netflix_clone"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem button onClick={() => { dispatch(selectGenreOrCategory(value)); }}>
              <ListItemIcon>
                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        )
          : data?.genres?.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem button onClick={() => { dispatch(selectGenreOrCategory(id)); }}>
                <ListItemIcon>
                  <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
      </List>
    </>
  );
}

export default Sidebar;
