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

export const ImageElement = (props) => {
  console.log(props.child)
  return (
    <div>
      <CardMedia
        className={props.classes.media}
        image={props.item[props.field] && props.item[props.field][0]}
        title="Contemplative Reptile"
      />
      {
        props.child ? props.child.map((item, index) => {
          const Type = components[item.component];
          return (
            <Type
              key={item.component || index}
              item={props.item}
              Style={{position: 'absolute'}}
              field={item.field}
            />
          )
        }) : null
      }
    </div>
  )
}