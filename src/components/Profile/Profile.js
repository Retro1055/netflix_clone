import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../Features/auth';

function Profile() {
  const { user } = useSelector(userSelector);
  const favouriteMovies = [];
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button onClick={logOut}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favouriteMovies.length ? (
        <Typography variant="h5">Add favourites or watchlist some movies to see them here</Typography>
      ) : (
        <Box>
          favourite movies
        </Box>
      )}
    </Box>
  );
}

export default Profile;
