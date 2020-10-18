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
import logo from './img/logo.png';

import bathroom1 from './img/bathroom1.jpg';
import kitchen1 from './img/kitchen1.jpg';
import image1 from './img/bfStairs.jpg';

import Footer from './Footer'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Guardiola Renovations, LLC.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  paddingTopBottom: {
    padding: "15px 0"
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} class="background">
          <Container maxWidth="sm" style={{padding: "0"}}>
          <Card  style={{background: "rgba(211,211,211, 0.7)", padding: "0 15px"}} elevation={0} square>  
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.paddingTopBottom}>
                <img src={logo} alt="Logo"  width="100%"/>
              </Grid>
            </Grid>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Some home renovation and remodeling companies focus on a single room. Some only do bathrooms, while others only do kitchens. At Corbett Design Build, we do it all, from bedrooms to bathrooms, basements to attics. Our professional home renovation contractors and home design experts help you plan ahead to create the home of your dreams.
            </Typography>
          </Card>  
          </Container>
        </div>
{/* First section start her  */}
        <Hidden smDown>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container>
              <Grid item xs={12} sm={6}>
                <Card className={classes.card} square disableElevation>
                <CardMedia className={classes.cardMedia} image={bathroom1}/>
                </Card>
              </Grid>

              <Grid container square xs={12} sm={6} justify="center" alignItems="center">
                  <Grid item style={{padding: "15px"}}>
                  <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Bathrooms
                  </Typography>
                  <Typography align="center" color="textPrimary" paragraph>
                    We help you pick the perfect fixtures, lighting, and materials to turn your most frequently used rooms into an oasis. Our comprehensive contractor services install everything—even the plumbing and wiring.
                  </Typography>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button href="./gallery" variant="outlined" color="primary">
                          View More
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                  </Grid>
              </Grid>

              <Grid container square xs={12} sm={6} justify="center" alignItems="center">
                  <Grid item style={{padding: "15px"}}>
                  <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Kitchens & Doors
                  </Typography>
                  <Typography align="center" color="textPrimary" paragraph>
                    We can turn the centerpiece of your home into a masterpiece for your family. We install everything from floors to ceilings, including cabinets, fixtures, countertops, appliances, windows, doors, and everything in between.
                  </Typography>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button href="./gallery" variant="outlined" color="primary">
                          View More
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                  </Grid>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card className={classes.card} square>
                  <CardMedia className={classes.cardMedia} image={kitchen1} title="Image title" />
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card className={classes.card} square>
                  <CardMedia className={classes.cardMedia} image={image1} title="Image title" />
                </Card>
              </Grid>

              <Grid container square xs={12} sm={6} justify="center" alignItems="center">
                  <Grid item style={{padding: "15px"}}>
                  <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Before & After
                  </Typography>
                  <Typography align="center" color="textPrimary" paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc.
                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                    entirely.
                  </Typography>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button href="./gallery" variant="outlined" color="primary">
                          View More
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                  </Grid>
              </Grid>
          </Grid>
        </Container>
        </Hidden>
{/* Second section start here  */}
        <Hidden mdUp>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
{/* MOBIEL CARD 1 */}            
              <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={bathroom1}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Bathrooms
                    </Typography>
                    <Typography>
                      We help you pick the perfect fixtures, lighting, and materials to turn your most frequently used rooms into an oasis. Our comprehensive contractor services install everything—even the plumbing and wiring.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="./gallery" size="small" color="primary">
                      View More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            
{/* MOBIEL CARD 2 */}            
              <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={kitchen1}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Kitchens & Doors
                    </Typography>
                    <Typography>
                      We can turn the centerpiece of your home into a masterpiece for your family. We install everything from floors to ceilings, including cabinets, fixtures, countertops, appliances, windows, doors, and everything in between.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="./gallery" size="small" color="primary">
                      View More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            
{/* MOBIEL CARD 3 */}            
              <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image1}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Before & After
                    </Typography>
                    <Typography>
                      ...This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  href="./gallery" size="small" color="primary">
                      View More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            
          </Grid>
        </Container>
        </Hidden>
      </main>
    </React.Fragment>
  );
}