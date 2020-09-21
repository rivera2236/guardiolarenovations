import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { Switch } from 'react-router-dom';
import Album from './Album'
import About from './About'
 
const Navigation = () => {
    return (
      <div>
	   	<ul class="nav">
	      <li><NavLink to="/">Home</NavLink></li>
	      <li><NavLink to="./about">About</NavLink></li>

	      <NavLink to="./about">
			  <Button variant="contained" color="primary"  startIcon={<Icon>build</Icon>} disableElevation>
			  Gallery
			  </Button>
	      </NavLink>

	      <li><NavLink to="./users">Users</NavLink></li>
	    </ul>
      </div>
    );
}
 
export default Navigation;