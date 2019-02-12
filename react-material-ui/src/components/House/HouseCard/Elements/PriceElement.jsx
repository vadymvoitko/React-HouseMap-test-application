import React from 'react'
import {
  CardContent, Typography
} from "@material-ui/core";
export const PriceElement = props => {
  const { item, field, styles } = props
  return (
    <CardContent>
      <Typography
        component="h2"
        style={{ ...(styles || {})}}
      >
        $ {item[field]}
      </Typography>
    </CardContent>
  )
}