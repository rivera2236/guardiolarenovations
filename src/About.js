import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Card from '@material-ui/core/Card';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';

import image from './img/remodeling-banner.jpg';
import image2 from './img/remodeling-banner2.jpg';

import Tab from './Tab';
import Tab2 from './Tab2';

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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));



const tileData = [
  {
    img: image,
    title: 'Before',
    author: 'author',
  },
  {
    img: image2,
    title: 'After',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image2,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image2,
    title: 'Image',
    author: 'author',
  },
];
 
function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div>
    <main style={{padding: "50px"}}>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={10}>
        <Typography>
          <h2>GENERAL RENOVATIONS</h2> 
          <p>Something here to give the this section a purpose or description of an image!</p>
        </Typography>
      </Grid>

      <Grid>
        <Tab />
      </Grid>

    </Grid>
    </main>

    <footer className={classes.footer} style={{padding: "48px"}}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>

                      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                        <div className={classes.root}>
                          <IconButton aria-label="facebook">
                            <FacebookIcon />
                          </IconButton>
                        </div>

                        <div className={classes.root}>
                          <IconButton aria-label="twitter">
                            <TwitterIcon />
                          </IconButton>
                        </div>

                        <div className={classes.root}>
                          <IconButton aria-label="instgram">
                            <InstagramIcon />
                          </IconButton>
                        </div>
                      </Grid>

        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}

export default SingleLineGridList;
