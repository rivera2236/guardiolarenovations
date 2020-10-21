import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';

import Icon from '@material-ui/core/Icon';

import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import './App.css';

import SvgIcon from '@material-ui/core/SvgIcon'
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

import Hidden from '@material-ui/core/Hidden';

import { MemoryRouter as Router } from 'react-router';
import { BrowserRouter, NavLink, Switch, Route, Link as RouterLink  } from "react-router-dom";

import Menu from './Menu';
import Album from './Album';
import About from './About';

import Navigation2 from './Navigation2';


export default function Header() {
	return(
	<div>
		<AppBar position="relative">
			<Toolbar>
			  
			  <Grid container alignItems="flex-end" spacing="1">
			      <Grid item><Typography variant="h6" color="inherit" noWrap>717-891-0588</Typography></Grid>
			  </Grid>

			  <Hidden mdUp><Navigation2 /></Hidden>

			  <Hidden smDown>
			  <Grid container justify="flex-end" direction="row" spacing={1} mdUp>
			      <Grid item><NavLink to="/">
					  <Button variant="contained" color="primary"  startIcon={<Icon>home</Icon>} disableElevation>
					  Home
					  </Button>
			      </NavLink></Grid>

			      <Grid item><NavLink to="/gallery">
					  <Button variant="contained" color="primary"  startIcon={<Icon>build</Icon>} disableElevation>
					  Gallery
					  </Button>
			      </NavLink></Grid>

			      <Grid item><NavLink to="/contact">
					  <Button variant="contained" color="primary"  startIcon={<Icon>phone</Icon>} disableElevation>
					  Contact
					  </Button>
			      </NavLink></Grid>
			  </Grid>
			  </Hidden>

			</Toolbar>
		</AppBar>

	</div>	
	);
}