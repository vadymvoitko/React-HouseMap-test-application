import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import StyledButton from './StyledButton'
import ContentTemplates from './ContentTemplates'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};  

class TemplateDrawer extends React.Component {
  state = {
    top: false,
  };

  toggleDrawer = (side, open) => () => {
    console.log(side, open)
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <div>
        <StyledButton toggleDrawer={this.toggleDrawer}/>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            style={{
              height: '220px',
              overflow: 'hidden',
            }}
          >
            <ContentTemplates/>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemplateDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplateDrawer);