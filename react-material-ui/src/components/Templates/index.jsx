import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import StyledButton from './common/StyledButton'
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

class TemplateDrawer extends Component {
  state = {
    top: false,
  };
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  toggleDrawer = (side = 'top', open = true) => {
    console.log(side, open)
    this.setState({
      [side]: open,
    });
  };
  render() {
    const {classes} = this.props
    return (
      <>
        <StyledButton 
          btnText={'card template'}
          handleClick={() => this.toggleDrawer('top', true)}
        />
        <Drawer
          anchor="top"
          classes={{
            root: classes.root,
          }}
          open={this.state.top}
        >
          <div
            tabIndex={0}
            role="button"
            className={classes[this.props.width === 'xs' ? 'xsTowel' : 'towel']}
          >
            <ContentTemplates toggleDrawer={this.toggleDrawer}/>
          </div>
        </Drawer>
      </>
    );
  }
}
const TemplateDrawerWidth = withWidth()(TemplateDrawer);
export default withStyles(styles)(TemplateDrawerWidth);