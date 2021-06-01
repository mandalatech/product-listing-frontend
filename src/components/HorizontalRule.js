import React from 'react'

const HorizontalRule = ({ marginBottom, marginTop }) => {
  const style = {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.125)',
    marginBottom: marginBottom,
    marginTop: marginTop,
  }
  return (
    <div>
      <div style={style}></div>
    </div>
  )
}

HorizontalRule.defaultProps = {
  marginBottom: '1.75rem',
  marginTop: '1.75rem',
}

export default HorizontalRule
