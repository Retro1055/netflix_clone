import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';

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
            <ListItem button onClick={() => {}}>
              <ListItemIcon>
                <img src={blueLogo} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
