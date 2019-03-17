import React from 'react'
import { Typography } from '@material-ui/core';
const Tree = ({ arr }) => {
  const render = (
    <ul>
      {
        Array.isArray(arr) && arr.map(item => {
          return (
            <li key={item.id || item.component || item}>
              <Typography component="p">
                {item.component}
              </Typography>
              {
                item.children ?
                  <Tree arr={item.children || item}/> :
                  null
              }
            </li>
          )
        })
      }
    </ul>
  )
  return render
}

export default Tree