import React from 'react'
import {
  CardContent, Typography
} from "@material-ui/core";
export const PriceElement = props => {
  return (
    <CardContent>
      <Typography
        component="h2"
        style={{ ...(props.styles || {})}}
      >
        $ {props.item[props.field]}
      </Typography>
    </CardContent>
  )
}