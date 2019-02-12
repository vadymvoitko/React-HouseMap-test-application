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
  render() {
    const { currentTemplate } = this.props
    return (
      <div>
        <Grid 
          container
          spacing={24}
        >
          {this.props.items.map(itm => {
            return (
              <Grid key={itm.id || itm} item xs={12} md={6} lg={4}>
                <HouseCard
                  item={itm}
                  currentTemplate={currentTemplate}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HouseMap);
