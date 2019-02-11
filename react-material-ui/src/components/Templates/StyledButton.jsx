import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #1507e6 30%, #344b5c 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: '10px',
    right: '0',
    top: '0',
    zIndex: '1100',
    position: 'absolute',
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '20px'
  },
};

function StyledButton(props) {
  const { classes } = props;

  return (
    <Button
      onClick={props.toggleDrawer('top', true)}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      change card template
    </Button>
  );
}

StyledButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledButton);