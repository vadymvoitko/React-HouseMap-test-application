import React from 'react'
import {
  AppBar, Toolbar, Typography, IconButton
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link } from "react-router-dom";
import classNames from 'classnames';
const AppBarCustom = ({props}) => {
  const { open, handleDrawerOpen, classes } = props;
  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, { [classes.appBarShift]: open })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          <Link to="/">Main</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarCustom