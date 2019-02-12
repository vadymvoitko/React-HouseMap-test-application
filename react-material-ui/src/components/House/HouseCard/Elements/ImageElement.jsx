import React from 'react'
import {
  CardMedia
} from "@material-ui/core";
import { PriceElement, AreaElement, AddressElement } from './index.js'

const components = {
  ADDRESS: AddressElement,
  PRICE: PriceElement,
  AREA: AreaElement,
};

export const ImageElement = props => {
  const { child, field, item, classes } = props
  return (
    <div>
      <CardMedia
        className={classes.media}
        image={item[field] && item[field][0]}
        title="Contemplative Reptile"
      />
      {
        child ? child.map((item, index) => {
          const Type = components[item.component];
          return (
            <Type
              key={item.component || index}
              item={props.item}
              styles={{
                position: 'absolute',
                transform: 'translate(-15px, -55px)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 'x-large',
                backgroundColor: '#020224c7',
                borderRadius: '10%',
                padding: '0 6px'
              }}
              field={item.field}
            />
          )
        }) : null
      }
    </div>
  )
}