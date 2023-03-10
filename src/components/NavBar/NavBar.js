/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { Sidebar, Search } from '..';
import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { setUser, userSelector } from '../../Features/auth';

function NavBar() {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const dispatch = useDispatch();
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');
  useEffect(() => {
    const loginInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
          window.location.href = '/';
        }
      }
    };
    loginInUser();
  }, [token, sessionIdFromLocalStorage]);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMob) => !prevMob)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} className={classes.linkButton} to={`/profile/${user.id}`} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="data:image/jpeg;base64,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"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMob) => !prevMob)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}
export default NavBar;
