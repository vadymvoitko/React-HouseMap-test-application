import React from 'react';
import { Drawer, List, Divider, IconButton, ListItem, ListItemIcon } from '@material-ui/core';
import { ChevronLeft, ChevronRight, EventSeat } from '@material-ui/icons';
import { Link } from "react-router-dom";
const AppDrawer = ({props}) => {
  const { classes, open, theme, handleDrawerClose } = props;
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><EventSeat /></ListItemIcon>
          <Link to="/house-map">Houses</Link>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default AppDrawer