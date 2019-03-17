import React, { Component } from "react";
import { connect } from "react-redux";
import HouseCard from "./HouseCard";
import Grid from "@material-ui/core/Grid";

const mapStateToProps = state => ({
    items: state.items,
    currentTemplate: state.currentTemplate.template
  })
class HouseMap extends Component {
  state = {
    open: true
  }
  mapHouseCards = item => {
      return (
        <Grid key={item.id || item} item xs={12} md={6} lg={4}>
          <HouseCard
            item={item}
            currentTemplate={this.props.currentTemplate}
          />
        </Grid>
      )
    }
  
  render() {
    return (
      <div>
        <Grid 
          container
          spacing={24}
        >
          {this.props.items.map(this.mapHouseCards)}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HouseMap);
