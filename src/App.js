import React from 'react';
import logo from './logo.svg';
import Header from './Header.js';

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

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
import MobileMenu from './Menu'
import Navigation from './Navigation'
import Navigation2 from './Navigation2'

function App() {
  return (
      <div>
		<Router>
	    	<Header />
		      
		    <div>
		        <Switch>
	              <Route path="/" component={Album} exact/>
	              <Route path="/about" component={About}/>
	              <Route path="/users"> <Users /> </Route>
	            </Switch>
	        </div>
        </Router>
      </div>
  );
}

export default App;
