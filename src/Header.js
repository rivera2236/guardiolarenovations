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
import { BrowserRouter, Switch, Route, Link as RouterLink  } from "react-router-dom";

import Menu from './Menu';
import Album from './Album';
import About from './About';


export default function Header() {
	return(
	<div>
		<AppBar position="relative">
			<Toolbar>
			  
			  <Grid container alignItems="flex-end" spacing="1">
			      <Grid item><HomeWorkIcon /></Grid>
			      <Grid item><Typography variant="h6" color="inherit" noWrap>Guardiola Renovations</Typography></Grid>
			  </Grid>

			  <Hidden mdUp><Menu /></Hidden>

			  <Hidden smDown>
			  <Grid container justify="flex-end" direction="row" spacing={1} mdUp>
			      <Grid item><Button variant="contained" color="primary"  startIcon={<Icon>home</Icon>} disableElevation>Home</Button></Grid>
			      <Grid item><Button variant="contained" color="primary"  startIcon={<Icon>build</Icon>} disableElevation>Gallery</Button></Grid>
			      <Grid item><Button variant="contained" color="primary"  startIcon={<Icon>phone</Icon>} disableElevation>Contact</Button></Grid>
			  </Grid>
			  </Hidden>

			</Toolbar>
		</AppBar>

    <Router>
	    <Switch>
		    <Route path="/" exact>
		      <Album />
		    </Route>
		    <Route path="/about">
		      <About />
		    </Route>
		    <Route path="/users">
		    </Route>
	    </Switch>
    </Router>
	</div>	
	);
}