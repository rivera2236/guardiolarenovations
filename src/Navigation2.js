import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Album from './Album'
import About from './About'
import Users from './Users'

import Button from '@material-ui/core/Button';

import './App.css'

const ITEM_HEIGHT = 48;


const SimpleMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{color: "white"}}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
	      <NavLink to="/" style={{textdecoration: "none"}}>
		      <MenuItem onClick={handleClose} style={{textdecoration: "none"}}>Home</MenuItem>
          </NavLink>

          <NavLink to="/about">
		      <MenuItem onClick={handleClose}>About</MenuItem>
          </NavLink>

          <NavLink to="/users">
		      <MenuItem onClick={handleClose}>Users</MenuItem>
          </NavLink>

      </Menu>
    </div>
  );
}

export default SimpleMenu;