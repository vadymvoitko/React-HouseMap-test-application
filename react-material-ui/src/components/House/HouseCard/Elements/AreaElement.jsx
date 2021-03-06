import React from 'react'
import {
  CardContent, Typography
} from "@material-ui/core";
export const AreaElement = props => (
    <CardContent>
      <Typography 
        gutterBottom 
        variant="h5" 
        component="h2"
      >
        {props.item[props.field]}
      </Typography>
    </CardContent>
  )