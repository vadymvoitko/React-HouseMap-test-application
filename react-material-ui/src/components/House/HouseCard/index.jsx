import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AddressElement, ImageElement, PriceElement, AreaElement } from './Elements'
import { Card, CardActionArea } from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    height: 140
  }
};

const components = {
  IMAGE: ImageElement,
  ADDRESS: AddressElement,
  PRICE: PriceElement,
  AREA: AreaElement,
};

class HouseCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  mapAttributes = (item, index) => {
    const Type = components[item.component]
    return (
      <Type
        key={item.component || index}
        classes={this.props.classes}
        item={this.props.item}
        child={item.children}
        field={item.field}
      />
    )
  }
  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardActionArea>
          {
            this.props.currentTemplate.map(this.mapAttributes)
          }
        </CardActionArea>
      </Card>
    );
  }
}
export default withStyles(styles)(HouseCard);
