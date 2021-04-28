import { Button, Container, Grid, Hidden, InputBase, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import kaoLogo from "../assets/KAO_logo.svg";
import fbLogo from "../assets/FB_logo.svg";
import googleLogo from "../assets/Google_logo.svg";
import twitterLogo from "../assets/Twitter_logo.svg";
import instaLogo from "../assets/Insta_logo.svg";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '137px',
    paddingBottom: '48px'
  },
  marginBottom20: {
    marginBottom: '20px'
  },
  logo: {
    width: '200px',
    marginBottom: '45px'
  },
  linkContainer: {
    marginBottom: '40px'
  },
  navLink: {
    padding: '7px 13px',
    color: theme.palette.text.primary,
    fontSize: '23px'
  },
  inputContainer: {
    width: '45%',
    minWidth: '300px'
  },
  inputWraper: {
    padding: '7px 12px 7px 60px',
    backgroundColor: theme.palette.primary.main
  },
  input: {
    width: '70%',
    color: '#FFF',
    fontSize: '20px'
  },
  inputButton: {
    backgroundColor: '#393B8A',
    color: '#FFF',
    width: '30%',
    fontSize: '20px'
  },
  contactWraper: {
    marginTop: '60px',
    marginBottom: '60px',
  },
  contactItem: {
    margin: '0 10px'
  },
}));

const navLinks = [
  { title: `Shop`, path: `/shop` },
  { title: `Reviews`, path: `/reviews` },
  { title: `Help`, path: `/help` },
  { title: `Returns`, path: `/returns` },
  { title: `Story`, path: `/story` },
  { title: `Partnership`, path: `/partner` },
];

const contactLink = [
  { title: `Facebook`, path: `/fb`, icon: fbLogo },
  { title: `Google`, path: `/google`, icon: googleLogo },
  { title: `Twitter`, path: `/twitter`, icon: twitterLogo },
  { title: `Instagram`, path: `/insta`, icon: instaLogo },
]

function Footer() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container
        className={classes.root}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid item sm={12}>
          <img src={kaoLogo} alt="KAO" className={classes.logo}/>
        </Grid>
        <Grid item sm={12} className={classes.linkContainer}>
          <Grid container>
            {navLinks.map(({title, path}, index) => (
              <Grid item sm={6} md={2}  key={index} className={classes.navLink}>
                <Link href={path} color="textPrimary" underline="none">{title}</Link>
              </Grid>))
            }
          </Grid>
        </Grid>
        <Grid item sm={12} className={classes.inputContainer}>
          <Hidden smDown>
            <Paper component="form" className={classes.inputWraper}>
              <InputBase
                placeholder="Start Your Journey"
                inputProps={{ 'aria-label': 'start your journey' }}
                className={classes.input}
              />
              <Button variant="contained" className={classes.inputButton}>
                I am in
              </Button>
            </Paper>
          </Hidden>
        </Grid>     
        <Grid item sm={12} className={classes.contactWraper}>
          <Grid container>
            {contactLink.map(({title, path, icon}, index) => (
              <Grid item key={index} className={classes.contactItem}>
                <Link href={path} color="textPrimary" underline="none">
                  <img src={icon} alt={title}/>
                </Link>
              </Grid>))
            }
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h6">© 2021. All rights reserved.  Kaoengine</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;