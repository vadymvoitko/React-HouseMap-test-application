import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Drawer, CssBaseline, AppBar, Toolbar, List, 
  Typography, Divider, IconButton, ListItem, ListItemIcon } from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight, EventSeat } from '@material-ui/icons';
import HouseMap from './../House'
import TemplateDrawer from './../Templates'
import styles from './styles'

class PersistentDrawerLeft extends Component {
  state = {
    open: false,
  };
  handleDrawerOpen = () => {
    this.setState(() => ({ open: true }));
  };
  handleDrawerClose = () => {
    this.setState(() => ({ open: false }));
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                <Link to="/">Main</Link>
              </Typography>
            </Toolbar>
          </AppBar>
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
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
              </IconButton>
            </div>
            <Divider/>
            <List>
              <ListItem button>
                <ListItemIcon><EventSeat /></ListItemIcon>
                <Link to="/house-map">Houses</Link>
              </ListItem>
            </List>
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <TemplateDrawer/>
            <Route path="/house-map" component={HouseMap} />
            <Route exact path="/" render={() => <div>Welcome to HouseMap</div>} />
          </main>
        </div>
      </Router>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);