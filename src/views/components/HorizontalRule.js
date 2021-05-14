import React from 'react'

const HorizontalRule = () => {
  const style = {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.125)',
    marginBottom: '1.75rem',
    marginTop: '1.75rem',
  }
  return (
    <div>
      <div style={style}></div>
    </div>
  )
}

export default HorizontalRule
