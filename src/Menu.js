import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Album from './Album'
import About from './About'
import Users from './Users'

import { NavLink } from 'react-router-dom';



const options = [
  'Home',
  'Gallery',
  'Contact'
];

const ITEM_HEIGHT = 48;

const LongMenu = () => {
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
        <Router>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="./about">About</NavLink>
            <NavLink to="./users">Users</NavLink>

            
          </div>
        </Router>

      </Menu>
    </div>
  );
}



export default LongMenu; 
