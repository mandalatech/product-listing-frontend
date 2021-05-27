import React from 'react'

export default function Overlay() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 10000,
        backgroundColor: 'rgba(255,255,255,0.5)',
      }}
    />
  )
}
