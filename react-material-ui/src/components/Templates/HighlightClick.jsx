import React from 'react';
export const HighlightClick = (WrapComponent, props) => {
  return (
    <div className={props.classes.overlay} style={{ backgroundColor: [props.condition ? '#ebebeb' : 'unset'] }}>
      <WrapComponent />
    </div>
  )
}