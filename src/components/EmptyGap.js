import React from 'react'

const EmptyGap = ({ x, y }) => {
  return <div className={'my-' + y + ' mx-' + x}></div>
}

export default EmptyGap

EmptyGap.defaultProps = {
  x: 0,
  y: 0,
}
