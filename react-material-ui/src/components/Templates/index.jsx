import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import StyledButton from './StyledButton'
import ContentTemplates from './ContentTemplates'
import withWidth from '@material-ui/core/withWidth';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    backgroundColor: 'mintcream'
  },
  towel: {
    minHeight: '650px',
    overflow: 'hidden',
  },
  xsTowel: {
    padding: '5px'
  }
};  

class TemplateDrawer extends React.Component {
  state = {
    top: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    return (
      <div>
        <StyledButton toggleDrawer={this.toggleDrawer}/>
        <Drawer 
          anchor="top"
          classes={{
            root: this.props.classes.root,
          }}
          open={this.state.top} 
          onClose={this.toggleDrawer('top', false)}
        >
          <div
            tabIndex={0}
            role="button"
            className={this.props.classes[this.props.width === 'xs' ? 'xsTowel' : 'towel']}
          >
            <ContentTemplates toggleDrawer={this.toggleDrawer}/>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemplateDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(TemplateDrawer));