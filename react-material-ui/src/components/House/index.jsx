import React from 'react';
import { connect } from "react-redux";
import { getData } from "./../../store/actions";
import HouseCard from './HouseCard'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

function mapDispatchToProps(dispatch) {
  return {
    getData: _ => dispatch(getData())
  };
}
function mapStateToProps(state) {
  return {
    items: state.items,
    currentTemplate: state.currentTemplate.template
  }
}
class HouseMap extends React.Component {
  constructor(state) {
    super();
    this.state = {
      open: true,
      items: state.items
    }
  }
  componentDidMount() {
    this.props.getData()
  }
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          {(
            this.props.items.map(itm => {
              return (
                <Grid key={itm.id || itm} item xs={6} md={4} lg={3}>
                  <HouseCard item={itm} currentTemplate={this.props.currentTemplate} />
                </Grid>
              )
            })
          )}
        </Grid>
      </div>
    );
  }
}
const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const HouseMapStyled = withStyles(styles)(HouseMap);
const HouseMapConnect = connect(mapStateToProps, mapDispatchToProps)(HouseMapStyled);
export default HouseMapConnect;