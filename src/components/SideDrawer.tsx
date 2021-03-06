import { Divider, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "./NavigationBar";
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import logo from "../assets/KAO_logo.svg";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
      width: 250
    },
    linkText: {
      textDecoration: `none`,
      color: theme.palette.text.secondary
    },
    selectedItem: {
      backgroundColor: theme.palette.primary.main,
      color: '#FFF',
      margin: `5px`,
      width: `calc(100% - 10px)`,
      padding: `4px 11px`,
      borderRadius: `5px`,
      '& .MuiIcon-colorPrimary': {
        color: '#FFF'
      }
    },
    logoContainer: {
      height: `64px`,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    logo: {
      width: '90px'
    }
  }));

const navLinks: NavLink[] = [
  { title: `Trang chủ`, path: `/#`, icon: HomeIcon },
  { title: `Về chúng tôi`, path: `/about-us` },
  { title: `Con người`, path: `/people` },
  { title: `Liên hệ`, path: `/contact` },
];

const SideDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({ drawOpen: false, selectedItem: 0 });

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, drawOpen: open });
  };

  const sideDrawerList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.logoContainer}>
        <img alt="logo" src={logo} className={classes.logo} />
      </div>
      <Divider />
      <List component="nav">
        {navLinks.map(({ title, path, icon }, itemIndex) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button className={state.selectedItem === itemIndex ? classes.selectedItem : ''}>
              {icon &&
                <ListItemIcon>
                  <Icon component={icon} color="primary" />
                </ListItemIcon>
              }
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        color="primary"
      >
        <ListIcon fontSize="large" />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={state.drawOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        {sideDrawerList()}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default SideDrawer;
