import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HouseMap from './../House'
import TemplateDrawer from './../Templates'
import styles from './styles'
import AppBarCustom from './AppBarCustom'
import AppDrawer from './AppDrawer'
import test from './../test'

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
  mainPageContent = () => <div>Welcome to HouseMap</div>;

  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <Router>
        <div className={classes.root}>
          <AppBarCustom
            props={{
              classes,
              open,
              handleDrawerOpen: this.handleDrawerOpen
            }}
          />
          <AppDrawer
            props={{
              classes,
              open,
              theme: this.props.theme,
              handleDrawerClose: this.handleDrawerClose
            }}
          />
          <main className={ classNames( classes.content, {[classes.contentShift]: open} ) }>
            <div className={classes.drawerHeader} />
            <TemplateDrawer/>
            <Route path="/house-map" component={HouseMap}/>
            <Route exact path="/" render={this.mainPageContent} />
            <Route exact path="/test" component={test} />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);