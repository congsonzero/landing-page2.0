import { AppBar, Button, Container, Divider, Hidden, IconButton, Link, List, ListItem, ListItemText, makeStyles, Toolbar } from "@material-ui/core";
import SideDrawer from "./SideDrawer";
import logo from "../assets/KAO_logo.svg";
import SearchIcon from '@material-ui/icons/Search';

export type NavLink = {
  title: string;
  path: string;
  icon?: any;
}

const useStyles = makeStyles((theme) => ({
  root : {
    height: '64px',
    boxShadow: 'none'
  },
  toolbar: {
    height: '100%'
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    width: `auto`
  },
  linkText: {
    display: `flex`,
    color: theme.palette.text.secondary,
    textDecoration: `none`,
    '& .MuiListItemText-primary': {
      whiteSpace: 'nowrap'
    }
  },
}));

const navLinks = [
  { title: `Trang chủ`, path: `/#` },
  { title: `Về chúng tôi`, path: `/about-us` },
  { title: `Con người`, path: `/people` },
];

function NavigationBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Container className={classes.navbarDisplayFlex}>
          <Hidden mdUp>
            <SideDrawer/>
          </Hidden>
          <Button component={Link} className={classes.navbarDisplayFlex}>
            <img alt="logo" src={logo} />
          </Button>
          <Hidden mdUp>
            <IconButton color="primary">
              <SearchIcon/>
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
              <ListItem>
                <Button variant="contained" color="primary">
                  Liên Lạc Ngay
                </Button>
              </ListItem>
            </List>
          </Hidden>
        </Container>
      </Toolbar>
      <Divider />
    </AppBar>
  );
}

export default NavigationBar;