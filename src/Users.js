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
import { BrowserRouter, Route, Link as RouterLink  } from "react-router-dom";

import Menu from './Menu';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  low: {
    textTransform: 'lowercase'
  },
  cap: {
    textTransform: 'capitalize'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} class="background">
          <Container maxWidth="sm" style={{padding: "0"}}>
          <Card style={{background: "rgba(211,211,211, 0.7)", paddingBottom: "45px"}} elevation={0} square>  
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{paddingTop: "100px"}} gutterBottom>
              Contact Us!
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" style={{padding: "0 15px"}} paragraph>
              Please feel free to contact us if you need a quote or have any questions. You can also check us out on social media.
            </Typography>
            
            <Hidden xsDown>
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item xs={10}>
                <h2>Phone:<Link href="tel:7178910588"> (717) 891-0588</Link></h2>
                <h2>Email:<Link href="mailto:guardiolarenovations19@gmail.com?subject=Need information or quote!"> guardiolarenovations19@gmail.com</Link></h2>
                <h2>Facebook:<Link target="_blank" href="https://www.facebook.com/pages/category/Kitchen---Bath-Contractor/Guardiola-Renovations-108219213937689/"> Guardiola Renovations</Link></h2>
                <h2>Instagram:<Link target="_blank" href="https://www.instagram.com/guardiolarenovations/?hl=en"> @guardiolarenovations</Link></h2>
              </Grid>
            </Grid>
            </Hidden>
            
            <Hidden smUp>
            <center>
              <Button href="tel:7178910588" variant="contained" color="primary" size="large">
                Phone: (717) 891-0588
              </Button>
            </center>
            <br/>
            <center>
              <Button className={classes.low} href="mailto:guardiolarenovations19@gmail.com?subject=Need information or quote!" variant="contained" color="primary" size="large">
                guardiolarenovations@gmail.com
              </Button>
            </center>
            <br/>
            <center>
              <Button className={classes.cap} target="_blank" href="https://www.facebook.com/pages/category/Kitchen---Bath-Contractor/Guardiola-Renovations-108219213937689/" variant="contained" color="primary" size="large">
                Facebook
              </Button>
            </center>
            <br/>
            <center>
              <Button className={classes.cap} target="_blank" href="https://www.instagram.com/guardiolarenovations/?hl=en" variant="contained" color="primary" size="large">
                Instagram
              </Button>
            </center>
            </Hidden>

            
          </Card>  
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}