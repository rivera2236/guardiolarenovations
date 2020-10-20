import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Album from './Album'
import About from './About'
import Users from './Users'

function App() {
  return (
      <div>
		<Router>
	    	<Header />
		      
		    <div>
		        <Switch>
	              <Route path="/guardiolarenovations/" component={Album} exact/>
	              <Route path="/guardiolarenovations/gallery" component={About}/>
	              <Route path="/guardiolarenovations/contact"> <Users /> </Route>
			      <Album />
	            </Switch>
	        </div>

	        <Footer />
        </Router>
      </div>
  );
}

export default App;
