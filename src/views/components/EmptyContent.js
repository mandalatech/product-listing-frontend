import React from 'react'

const EmptyContent = ({ content }) => {
  const style = { minHeight: '50px' }
  return (
    <div
      style={style}
      className="d-flex justify-content-between align-items-center"
    >
      <p style={{ color: '#8A8A8A', fontSize: '18px' }}>{content}</p>
    </div>
  )
}

export default EmptyContent
